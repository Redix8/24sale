from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
import time
import sys
import os
import django


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if BASE_DIR not in sys.path:
    sys.path.append(BASE_DIR)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales24.settings")
django.setup()

from storage.models import Product

def getGS_products(driver, sale):
    current_idx = 1
    old_idx = 9999
    store = 'GS'
    products = []
    if sale == 'OPO':
        selector = 'div:nth-child(3) > div > '
    elif sale == 'TPO':
        selector = 'div:nth-child(5) > div > '
    elif sale == 'OTR':
        selector = 'div:nth-child(7) > div > '
    while True:
        html = driver.page_source
        soup = BeautifulSoup(html, 'html.parser')
        prod_box = soup.find('ul', {'class': 'prod_list'})
        current_idx = int(driver.find_element_by_css_selector(selector + 'span > a.on').text)

        if old_idx == current_idx:
            break

        for x in prod_box:
            try:
                img_url = x.find('img')['src']
            except:
                img_url = 'none'
            product_name = x.find('p', {'class': 'tit'}).string
            price = x.find('span', {'class': 'cost'}).contents[0].replace(',', "")

            temp = {
                'product_name': product_name,
                'img_url': img_url,
                'price': int(price),
                'store': store,
                'sale': sale
            }

            if sale == 'OTR':
                dum_name = x.find('p', {'class': 'name'}).contents[1]
                temp['product_name'] = product_name + ' + ' + dum_name

            products.append(temp)

        next_page = driver.find_element_by_css_selector(selector + 'a.next')
        next_page.click()
        old_idx = current_idx
        time.sleep(1)

    return products


def itemLoading(driver):
    while True:
        try:
            load_more_button = driver.find_element_by_css_selector('div.prodListBtn-w')
        except NoSuchElementException:
            print("no element found")
            break
        load_more_button.click()
        waitForLoading(driver)


def waitForLoading(driver):
    start = time.time()
    while True:
        html = driver.page_source
        soup = BeautifulSoup(html, 'html.parser')
        result = soup.find('div', {'class':'AjaxLoading'})
        if 'none' in result['style']:
            break
        if time.time()-start>10:
            break


def getCU_products(driver, sale):
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    productsList = soup.find('div', {'class': 'prodListWrap'}).find_all('li')
    store = 'CU'

    products = []

    for product in productsList:
        if len(product.contents) > 1:
            product_name = product.find('p', {'class': 'prodName'}).a.contents[0]
            img_url = product.img['src']
            price = product.find('p', {'class': 'prodPrice'}).span.contents[0].replace(',', "")
            temp = {
                'product_name': product_name,
                'img_url': img_url,
                'price': int(price),
                'store': store,
                'sale': sale
            }
            products.append(temp)
    return products


def SV_itemLoading(driver):
    i = 0
    while True:
        try:
            more_button = driver.find_element_by_css_selector('li.btn_more')
            more_button.click()
            print(i, "clicked")
            i += 1
            time.sleep(2)
        except NoSuchElementException:
            print("no more items")
            break
        if i >= 100:
            break


def getSV_products(driver, sale):
    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    if sale == 'OTR':
        result = soup.select('#listUl > li > a.btn_product_01')
        result2 = soup.select('#listUl > li > a.btn_product_02')
    else:
        result = soup.find_all('div',{'class':'pic_product'})
    store = 'SV'
    products =[]
    for i, product in enumerate(result):
        img_url = 'http://www.7-eleven.co.kr'
        img_url += product.img['src']
        product_name = product.find('div', {'class':'name'}).contents[0]
        if sale == 'OTR':
            name2 = result2[i].find('div', {'class':'name'}).contents[0]
            product_name += (' + ' +name2)
        price = product.find('div', {'class':'price'}).span.contents[0].replace(',',"")
        temp ={
            'product_name': product_name,
            'img_url' : img_url,
            'price': int(price),
            'store': store,
            'sale': sale
        }
        products.append(temp)
    return products


if __name__=='__main__':
    options = webdriver.ChromeOptions()
    options.add_argument('headless')
    options.add_argument('log-level=2')
    driver = webdriver.Chrome('C:/Users/J/Documents/chromedriver_win32/chromedriver.exe', options=options)

    driver.get('http://gs25.gsretail.com/gscvs/ko/products/event-goods')
    time.sleep(2)
    GS_OPO = getGS_products(driver, 'OPO')
    print("GS_OPO done")

    TPO_page_button = driver.find_element_by_css_selector('div.eventtab span a#TWO_TO_ONE')
    TPO_page_button.click()
    time.sleep(2)
    GS_TPO = getGS_products(driver, 'TPO')
    print("GS_TPO done")

    OTR_page_button = driver.find_element_by_css_selector('div.eventtab span a#GIFT')
    OTR_page_button.click()
    time.sleep(2)
    GS_OTR = getGS_products(driver, 'OTR')
    print("GS_OTR done")

    driver.get('http://cu.bgfretail.com/event/plus.do?category=event&depth2=1&sf=N')
    waitForLoading(driver)

    OPO_page_button = driver.find_element_by_css_selector('ul.eventInfo li.eventInfo_02')
    OPO_page_button.click()
    waitForLoading(driver)
    itemLoading(driver)
    CU_OPO = getCU_products(driver, 'OPO')
    print("CU_OPO done")

    TPO_page_button = driver.find_element_by_css_selector('ul.eventInfo li.eventInfo_03')
    TPO_page_button.click()
    waitForLoading(driver)
    itemLoading(driver)
    CU_TPO = getCU_products(driver, 'TPO')
    print("CU_TPO done")

    OTR_page_button = driver.find_element_by_css_selector('ul.eventInfo li.eventInfo_04')
    OTR_page_button.click()
    waitForLoading(driver)
    itemLoading(driver)
    CU_OTR = getCU_products(driver, 'OTR')
    print("CU_OTR done")

    driver.get('http://www.7-eleven.co.kr/product/presentList.asp')
    time.sleep(2)
    SV_itemLoading(driver)
    SV_OPO = getSV_products(driver, 'OPO')
    print("SV_OPO done")

    TPO_page_button = driver.find_element_by_css_selector('div.wrap_tab ul li:nth-child(2)')
    TPO_page_button.click()
    time.sleep(2)
    SV_itemLoading(driver)
    SV_TPO = getSV_products(driver, 'TPO')
    print("SV_TPO done")

    OTR_page_button = driver.find_element_by_css_selector('div.wrap_tab ul li:nth-child(3)')
    OTR_page_button.click()
    time.sleep(2)
    SV_itemLoading(driver)
    SV_OTR = getSV_products(driver, 'OTR')
    print("SV_OTR done")

    driver.quit()

    store_list= [GS_OPO, GS_TPO, GS_OTR,
                 CU_OPO, CU_TPO, CU_OTR,
                 SV_OPO, SV_TPO, SV_OTR]

    Product.objects.all().delete()
    for st in store_list:
        for product in st:
            n = product['product_name']
            i = product['img_url']
            p = product['price']
            store = product['store']
            sale = product['sale']
            Product(product_name=n,
                    img_url=i,
                    price=p,
                    store=store,
                    sale=sale).save()

    print("done")
















