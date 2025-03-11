
#Homework - 1

# or - ოპერატორი (თუ)
# or - ოპერატორის დროს ერთერთი თუ არის True - მაშინ დაგვიბრუნებს - (True)

print(True or True) #True or True რადგან არის მაშინ დაგვიბრუნებს Trues-ს
print(True or False) #True or False რადგან არის მაშინ დაგვიბრუნებს Trues-ს
print(False or True) #False or True რადგან არის მაშინ დაგვიბრუნებს Trues-ს
print(False or False) #False or False რადგან არის მაშინ დაგვიბრუნებს False-ს


#and - operatori (და)
#and - ოპერატორის დროს ორივე პორობა თუ არის True - მაშინ დაგვიბრუნებს - (True)

print(False and False) #False and True რადგან არის დაგვიბრუნებს False-ს
print(False and True) #False and True რადგან არის დაგვიბრუნებს False-ს
print(True and False) #True and False რადგან არის დაგვიბრუნებს False-ს
print(True and True) #True and True  რადგან არის დაგვიბრუნებს True-ს



#homework - 2

a = True or False or False

b = False and True and True

print(a or b)
print(b and a)



#Homework - 3

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

print(num1 == num2)



#Homework - 4

score = int(input("შეიყვანეთ თქვენი ქულა 0-დან 100-ამდე:"))

if score >= 90:
    print("Grade A.")

elif score >= 70:
    print("Grade B.")

elif score >= 50:
    print("Grade C.")

else:
    print("Grade F.")




#Homework - 5

number = int(input("enter the number:"))

if number % 2 == 0 and number > 10:
    print(True)

else:
    print(False)


