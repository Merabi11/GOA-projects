from turtle import *

width(5)
speed(100)
shape("turtle")

color("purple")
begin_fill()
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()

#paint door
forward(70)
left(90)

color("red")
begin_fill()
forward(100)
right(90)

forward(60)
right(90)

forward(100)
end_fill()
#end door

penup()
goto(200, 200)
pendown()

color("yellow")
begin_fill()
right(140)
forward(150)

left(98)
forward(150)
end_fill()

penup()
goto(0, 110)
pendown()


color("blue")
begin_fill()
left(132)
forward(40)

left(90)
forward(50)

left(90)
forward(40)
end_fill()

penup()
goto(200, 110)
pendown()

begin_fill()
forward(40)
right(90)

forward(50)
right(90)

forward(40)
end_fill()





exitonclick()