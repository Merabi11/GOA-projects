#homework - 1
#While loop - მუშაობის პრინციპი!

i = 1 #i- ეს არის საინტერაციო ცვლადი მას თავიდანვე მივანიჭეთ რომ საწყისად იყოს-(1) რომელიც ყოველ ციკლის ბრუნვის დროს მიენიჭება ახალი მნიშვნელობა.

while i < 15: #i-სანამ ნაკლები იქნება 15-ზე მანამ ბეჭდოს და არ გაჩერდეს ანუ პირობა სანამ მართალია მანამ იმუშავოს ციკლმა როდესად ფირობა იქნება False-ის შეწყვეტს მუშაობას ანუ როდესად i-გახდება 15 ციკლი შეწყვეტს მუშაობას.
    print(i) #აქ პრინტში გადაცემული გვაქვს i-ცვლადი რომელსას მინიჭებული აქვს 1 ყოველ ციკლის გაშვების დროს ყოველ i-ცვლადი იღებს ახალ მნიშვნელობას ანუ თავიდან არის 1 ჩვენ ვუთხარით რომ სანამ 15 ნაკლებიხარ მანამ ბეჭდე (1,2,3... ასე შემდეგ.)
    i += 1 #ყოველ ციკლის გაშვების დროს i- ცვლადი გაიზრდება 1-ით და რომ მიაღწევს 15-ს ის გაჩერდება ანუ 15-ამდე მიდი ერთ ერთობით გაიზარდეთქო.
print("ბეჭდვა დასრულდა.") #ეს პრინტი მაშინ დაიბეჭდება როდესაც ციკლი შესრულდება ანუ ციკლი როდესაც დაასრულებს პირობას მაშინ დაიბეჭდება ეს ნამა არგამოვა სანამ ციკლი არ იქნება True.



#homework - 2

#for loop და while loop - რითი განსხვავდებიან ერთმანეთისგან.

#1.for loop - მაშინ ვიყენებთ როდესაც ვიცით თუ რამდენჯერ უნდა გავამეოროთ კოდი მას შეუძლია მაგალითად კოდზე გადავლა ასევე 1-დან 20-ამდე ციფრების გამოტანა სტრინგებზე გადავლა და ესე ის მაშინ უნდა გამოვიყენოთ როდესაც ვიცით თუ რამდენჯერ უნდა გავამეოროთ კოდი მაშინ ვიყენებთ for loop-ს.

#1.while loop - მაშინ ვიყენებთ როდესაც არ ვიცით რამდენჯერ უნდა გავამეოროთ კოდი პირობა იქამდე მუშაობს სანამ მაგალითად არის True მაგ: მომხმარებელი სანამ არ შემოიტანს ზუსტ პაროლს ის იქამდე ეტყვის რომ ეს პაროლი არასწორია ჩვენ ხომ არ ვიცით მომხმარებელი პაროლს რამდენჯერ არ ჩაწერსა სწორად ამიტომ გამოვიყენებთ თუ არ ვიცით რამდნჯერ უნდა გავამეოროთ კოდი გამოვიყენოთ while loop-ს.



#homework - 3

num = 1

while num <= 20:
    print(num)
    num += 2




#homework - 4

password = 511

user = int(input("Please enter your password: "))

while user != password :
    print("Incorrect password. Try again")
    user = int(input("Try again password!"))

print("Correct password. You have successfully logged in.")


#homework - 5 

print("Sololear - შესრულებულია.")