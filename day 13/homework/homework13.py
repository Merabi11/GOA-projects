#homework - 1

#list - ეს არის სია რომელშიშ შეგვიძლია შევინახოთ string,float,integer,boolean(True, False) შეგვიძლია კიდე სიაში სია შევინახოთ ასევე შეგვიძლია ცვლადიც შევინახოთ მასში სიებში ნებისმიერ ელემენტს შეგვიძლია მივწვდეთ თავისი მისამართით ანუ ნომრით ელემენტის პოიცია მისი ნომერი თუ რა ნომერზე დგას.. [0],[1],[3]...ასე შემდეგ.

second_lists = ["python", "HTML", "CSS", "Javascript"]

#index     0        1     2     3      4         5
lists = ["python", 100, 10.5, True, False, second_lists] #აქ შევქმენი სია სადაც შევინახე სხვადასხვა რამ სტრინგი რიცხვი ათწილადი ჭეშმარიტი არაჭეშმარიტი ასევე შევინახე სიაში სია.
#index  -   -6      -5    -4    -3    -2       -1

print(lists[0]) #lists - ცვლადის სიაში მივწვდებით "python" - ელემენტს რომელიც დგას [0]-პოზიციაზე პრინტში ვიძახებთ ცვლადს რომელშიც გვაქვს სია შენახული შემდეგ კვადრატულ ფრჩხილებს და მივწვდებით კონკრეტულ ელემენტს პიზიციის მიხედვით.
print(lists[1]) #100
print(lists[2]) #10.5
print(lists[3]) #True
print(lists[4]) #False
print(lists[5]) #second_lists

#index - თვლა იწყება 0-დან თუ გვინდა ბოლო ელემენტს მივწვდეთ -1 არის ყველაზე ბოლო ელემენტი მინუსების საშვალებით ვითვლით მარჯვნიდან მარცხნივ -1,-2,-3 ასე შემდეგ.


#homework - 2

fruit_lists = ["banana", "apple", "orange", "mango"]

print(fruit_lists)


#homework - 3

car_lists = ["audi", "lamborghini", "CLS63", "BMW"]

print(car_lists[2])


#homework - 4

number_lists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

print(number_lists[-1])


#homework - 5

movie_lists = ["ironman", "spiderman", "halk", "batman", "captainamerica"]

print(movie_lists[0::3])


#homework - 6

user_numbers = int(input("Enter number: ")) #მომხმარებელი შეიყვანს რიცხვს.

count = 0 #ეს ითვლის გაიყოფა თუ არა.

for i in range(2, (user_numbers // 2) + 1): #იწყება 2-დან მომხმარებელის შეყვანილი რიცხვი გაიყოდა 2-ზე და დაემატება 1 რადგან ზუსტი რიცხვი მივიღოთ მაგალითად რო შეიყვანოს მომხმარებელმა 10 მაშინ გამოვა 9 ამიტომ +1 მაგიტომ რომ ზუსტი მივიღოთ.
    if user_numbers % i == 0: #მომხმარებლის შეყვანილი რიცხვი გაიყოფა 2ზე ნაშთიანი გაყოფით და თუ ის იქნება 0 ანუ უნაშთო მაშინ არარის მარტივი იმიტორომ მას აქვს 1-ის და საკუთარი თავის გარდა კიდევ სხვა გამყოფი.
        count += 1 #თუ გამყოფი ექნება მაშინ ქაუნთს დაემატოს +1 ყოველ გამეორებაზე რამდენჯერაც გაიყოფა

if count == 0: #თუ ქაუნთი იქნება 0-ის ტოლი მაშინ მას არააქს დათვლილი გაყოფა ანუ არ შესრულებულა და რიცხვს ქონდა 1-ზე და თავის თავზე გამყოფი.
    print("Number is prime.") #ეს გვეტყვის რომ რიცხვი არის მარტივი რომელიც იყოფა 1-ზე და თავის თავზე

else:
    print("Number is not prime.") #თუ რიცხვა აქვს 1-ზე მეტი და თავის თავის გარდა კიდევ სხვა გამყოფი ის არ არის მარტივი და გვეტყვის რომ ის არ არის მარტივი.


#homework - 7

print("Sololearn - შესრულებულია.")


