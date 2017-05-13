import requests
import bs4
import csv

r = requests.get('https://www.goodreads.com/shelf/show/computer-science')
soup = bs4.BeautifulSoup(r.text, 'html.parser')

with open('top_books.csv', 'w') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(('Title', 'Cover', 'Author', 'Times_Shelved', 'Average_Rating', 'Number_of_Ratings', 'Year_Published'))
    
    for item in soup.select('.mainContentContainer .mainContent .mainContentFloat .leftContainer .elementList'):
        title = item.select('.left .bookTitle')[0].text
        cover = item.select('.left .leftAlignedImage img')[0]['src']
        author = item.select('.left span .authorName span')[0].text

        shelved_string = item.select('.left a.smallText')[0].text
        times_shelved = "".join(i for i in shelved_string if i in "0123456789")

        rating_string = item.select('.left span.greyText.smallText')[0].text
        parts = rating_string.split('—\n')

        average_rating = parts[0].strip()
        avg_rating = "".join(i for i in average_rating if i in ".0123456789")
    
        total_num_ratings = parts[1].strip()
        num_ratings = int("".join(i for i in total_num_ratings if i in "0123456789"))

        year_published = parts[2].strip()
        yr_published = int("".join(i for i in year_published if i in "0123456789"))

        writer.writerow((title, cover, author, times_shelved, avg_rating, num_ratings, yr_published))

# for i in range(2, 11):
#     cookie = dict(locale="en;", __qca="P0-2019764884-1479254723094;", fbm_2415071772="base_domain=.goodreads.com;", __gads="ID=b45f87550607f47b:T=1479254770:S=ALNI_MataQm9ad3YCNzv7z03Q5fGbVE7cQ;", csid="BAhJIhgyNTEtNjM3ODEyNC04ODM4ODE3BjoGRVQ%3D--58dd45cb9f738ea54199e2017170b6b15c9c4a26;", u="OujEK4aUSlei1ehjkgbVgwO5tZb0XJ8EaXXvXYLWg7gZVIOm;", p="rAqGhkfSjzy9HKupiylcOR1TVaU-HbdjO7QH44CE1vPQHESw;", fbl="true;", __utma="250562704.1572153085.1479254723.1494625176.1494627496.61;", __utmb="250562704.21.10.1494627496;", __utmc="250562704;", __utmz="250562704.1494620694.59.21.utmcsr=homepage|utmccn=browsenav|utmcmd=web|utmcct=lists_cta;", _session_id2="12759a0cca2cd08f43bbb30059e546f4;", fbsr_2415071772="A0HtasYHyoknRyiHBNPy0po5uAOhFhB_XKuXvTkDvrg.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUUFlbi1XTWVDX09PWU4yRkluRm84V1pKN1VLMzJWX0FjZ0F4anRrVzRuMnR1R2FFWHdMWDBYcUtyYm02RW1GTUt2NmZ3cVpZVFpVQ204blhRZ0hDU285Z1B2MVVyWTREeFdXY2RPa1NsUFJRNDRSc0NCaWJ1bHByalk5SjRCcGJwZHZtaU15Wkg5d3pUWlBKSzAzbVlYVC1UVGQ0bld6ejdZTXJHYUpRX1lneVc2cUx0Wk9KZEVMZEhqRWphN0pYcTNwQkdiUUl6OWg2S1otdGtqUFowTWdVWHFEdlkzVTFaeklEVlVfM2FZcTR4b1RlLXc3dGhYR01TLXZjc3cwREM5NFJyYXBDOGxDRE9vY1AtRW5xWWJaMEY2WXJzNE5MeksxVE42UUh3VG5EblY3SFJITFNIMjVxTm1tbFBpUXhSendfeWh4ZFNkYUxPcElOSzl1RWJxWiIsImlzc3VlZF9hdCI6MTQ5NDYzMzk1MywidXNlcl9pZCI6IjEzNzIyNjAxMzEifQ")

#     url = 'https://www.goodreads.com/shelf/show/computer-science' 
#     req = requests.get(url, params={'page': i}, cookies=cookie)
#     new_soup = bs4.BeautifulSoup(req.text, 'html.parser')
#     with open('top_books.csv', 'a') as csvfile:
#         writer = csv.writer(csvfile)
        
#         for item in new_soup.select('.mainContentContainer .mainContent .mainContentFloat .leftContainer .elementList'):
#             title = item.select('.left .bookTitle')[0].text
#             cover = item.select('.left .leftAlignedImage img')[0]['src']
#             author = item.select('.left span .authorName span')[0].text

#             shelved_string = item.select('.left a.smallText')[0].text
#             times_shelved = "".join(i for i in shelved_string if i in "0123456789")

#             rating_string = item.select('div.left > span.greyText.smallText')[0].text
#             parts = rating_string.split('—\n')

#             average_rating = parts[0].strip()
#             avg_rating = "".join(i for i in average_rating if i in ".0123456789")
        
#             total_num_ratings = parts[1].strip()
#             num_ratings = int("".join(i for i in total_num_ratings if i in "0123456789"))

#             year_published = parts[2].strip()
#             yr_published = int("".join(i for i in year_published if i in "0123456789"))

#             writer.writerow((title, cover, author, times_shelved, avg_rating, num_ratings, yr_published))


# cookie = dict(locale="en;", __qca="P0-2019764884-1479254723094;", fbm_2415071772="base_domain=.goodreads.com;", __gads="ID=b45f87550607f47b:T=1479254770:S=ALNI_MataQm9ad3YCNzv7z03Q5fGbVE7cQ;", csid="BAhJIhgyNTEtNjM3ODEyNC04ODM4ODE3BjoGRVQ%3D--58dd45cb9f738ea54199e2017170b6b15c9c4a26;", csm-sid="123-2096378-0855130;", u="OujEK4aUSlei1ehjkgbVgwO5tZb0XJ8EaXXvXYLWg7gZVIOm;", p="rAqGhkfSjzy9HKupiylcOR1TVaU-HbdjO7QH44CE1vPQHESw;", fbl="true;", __utma="250562704.1572153085.1479254723.1494625176.1494627496.61;", __utmb="250562704.21.10.1494627496;", __utmc="250562704;", __utmz="250562704.1494620694.59.21.utmcsr=homepage|utmccn=browsenav|utmcmd=web|utmcct=lists_cta;", _session_id2="12759a0cca2cd08f43bbb30059e546f4;", fbsr_2415071772="A0HtasYHyoknRyiHBNPy0po5uAOhFhB_XKuXvTkDvrg.eyJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImNvZGUiOiJBUUFlbi1XTWVDX09PWU4yRkluRm84V1pKN1VLMzJWX0FjZ0F4anRrVzRuMnR1R2FFWHdMWDBYcUtyYm02RW1GTUt2NmZ3cVpZVFpVQ204blhRZ0hDU285Z1B2MVVyWTREeFdXY2RPa1NsUFJRNDRSc0NCaWJ1bHByalk5SjRCcGJwZHZtaU15Wkg5d3pUWlBKSzAzbVlYVC1UVGQ0bld6ejdZTXJHYUpRX1lneVc2cUx0Wk9KZEVMZEhqRWphN0pYcTNwQkdiUUl6OWg2S1otdGtqUFowTWdVWHFEdlkzVTFaeklEVlVfM2FZcTR4b1RlLXc3dGhYR01TLXZjc3cwREM5NFJyYXBDOGxDRE9vY1AtRW5xWWJaMEY2WXJzNE5MeksxVE42UUh3VG5EblY3SFJITFNIMjVxTm1tbFBpUXhSendfeWh4ZFNkYUxPcElOSzl1RWJxWiIsImlzc3VlZF9hdCI6MTQ5NDYzMzk1MywidXNlcl9pZCI6IjEzNzIyNjAxMzEifQ")