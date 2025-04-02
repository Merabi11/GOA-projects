#homework - 1
#def - ესარის კოდის ბლოკი რომელიც ასრულებს ფუნქციას ის შეიცავს კოდის ერთობლიობას რომელიც გვეხმარება კოდის მრავალჯერ გამოყენებაში საჭირო დროს ჩვენ მხოლოდ ერთხელ დავწერთ ფუნქციას და ერთხელ დაწერილი ფუნქცია შეგვიძლია მრავალჯერ გამოვიძახოთ ცვლადის სახელის მეშვეობით
#მის საშვალებით ჩვენ თავიდან ვიცილებთ კოდის ბევრჯერ დაწერაში მას მას მხოლოდ ერთხელ შევქმნით და შემდეგ ცვლადის სახელის მეშვეობით გამოვიძახებთ და გამოვიყენებთ რამდენჯერაც დაგვჭირდება ამით მცირდება ერთიდა იგივე კოდის წერა ბევრჯერ და ამით ჩვენი ფაილი უფრო ლამაზი სტრუქტურის ხდება

def greet(): #def - ესარის ფუნქციის შექმნის სტრუქტურა ამით უკვე ვხვდებით რომ ფუნქციასთან გვაქვს საქმე მას ვარქმევთ სახელს ანუ ფუნქციას რაუნდა ერქვას ამ შეთხვევაში დავარგვით greet() - ანუ მისალმება სახელით აზრობრივი უნდა იყოს 
    print("Hello world") #ფუნქციის ტანში გვიწერია print("Hello world"), ფუნქცია უკვე შექმნილია მაგრამ ის არაფერს არ იზამს რომც გავუშვათ კოდი მას სჭირდება გამოძახება

greet() #აი ეს არის უკვე მთავარი ნაწილი რომლის საშვალებით ის დაწერილი ფუნქცია ამუშავდეს ამ ფუნქციის სახელის გამოძახებით უკვე დაგვიპტინტავს მისალმებას ვწერთ ფუნქციის სახელს შემდეგ ფრჩხილები და უკვე ფუნქცია გამოძახებულია შეგვიძლია ამ სახელის გამოძახებით სადაც არუნდა გამოვიძახოთ ის ყველგან იმუშავებს ამით ვიმარტივებთ საქმეს ერთხელ ვწერთი და მას ვიძახებთ რამდენჯერაც დაგვჭირდება


#homework - 2

def double_values(lists):

    second_lists = []

    for i in lists:
        second_lists.append(i * 2)

    return second_lists

print(double_values([2, 4, 6]))


#homework - 3

def evens(num):

    evens_lists =[]

    for i in num:
        if i % 2 == 0:
            evens_lists.append(i)
        
    return evens_lists

print(evens([2, 4, 7, 9, 11]))


#homework - 4

def numbers(lists):
    numbers_lists = []

    for i in lists:
        numbers_lists.append(i ** 2 * 10)
    
    return numbers_lists

print(numbers([10]))


#homework - 5

def names(name):
    strings = "aeiou"
    string_variable = ""

    for i in name:
        if i in strings:
            string_variable += i
    
    return string_variable

print(names("hello"))

#homework - 6

def numbers1(num):

    negative_numbers = []

    for i in num:
        if i < 0:
            negative_numbers.append(i)
    
    return negative_numbers

print(numbers1([-1, 10, -2, 10, 20, -10]))

#homework - 7

def numbers2(num):

    negative_numbers2 = []


    for i in num:
        if i > 0:
            negative_numbers2.append(i)
    
    return negative_numbers2

print(numbers2([-5, -7, 12, -1, 50]))

#homework - 8

def one_num(num):
    return num ** 2 * 10

print(one_num(10))

#homework - 9

def one_numbers(x, y):
    return x ** y

print(one_numbers(10, 2))