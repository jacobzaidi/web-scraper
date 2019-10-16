'''
Intercity Web Scraper Application

This application finds $1 deals from any two cities in New Zealand.
Change the origin and destination for your two cities and run the program.
    Paihia:PIH
    Whangarei: WRE
    Auckland: AKL
    Manukau: MNK
    Hamilton: HLZ
    Rotorua: ROT
    Taupo: TPO
    Tauranga: TRG
    Thames: TMZ
    Wellington: WLG
No longer functional.
By Jacob Zaidi
'''
import requests, bs4, time, random, os
from datetime import date, timedelta
d = date(2019,11,22)
delta = timedelta(days=1)
origin = "AKL"          # Intercity code for "Auckland"
destination = "MNK"     # Intercity code for "Manukau".
#   Most buses pass through Manukau to Auckland
#   So this makes searching faster (i.e. AKL to Rotorua, Wellington, Taupo)
title = "List of $1 bus services from Auckland to Manukau" 
print("*"*len(title) + '\n' + title + '\n' + '*' * len(title) )
while d <= date(2019,12,31):
    dollar_deal = False
    dates = d.strftime("%Y-%m-%d")
    res = requests.get('https://www.textise.net/showText.aspx?strURL=https%253A//www.intercity.co.nz/search-results/%253FFrom%253D'+origin+'%2526To%253D'+destination+'%2526Date%253D' + dates)
    # because of the Intercity site redesign, the link
    # redirects to the Intercity home page.
    # All that is being extracted now, is the home page.    
    res.raise_for_status()
    web = bs4.BeautifulSoup(res.text, 'lxml')
    for line in web.select('span > label'):
        line = str(line)
        price = int(line[line.find("$")+1: len(line)-8])
        with open(origin+"-"+destination+".txt", "a+") as myfile:
            myfile.write("{2} IC{0} ${1}\n".format(line[12:16], price, dates))
        if price == 1:
            print(line[line.find('"')+1:line.find('"')+5] + " " + dates)
            dollar_deal = True
    if dollar_deal:
        print("{0} - DOLLAR DEAL FOUND!!!".format(dates))
    else:
        print(dates) #let's us know it has parsed the website
                     #and keeps track where we are.
                     #because the app no longer works you will see
                     #the dates but nothing is really happening.
    print()
    d += delta
