# Algorithms & Basic Sequential Programs

This Lab required simple calculations in order to achieve a basic task.

See the following questions to which programs have been built to solve:

## Question 2
Develop an algorithm that prompts the user to enter two integer numbers, calculates the sum of the two numbers and then displays the following :
- The two numbers entered
- The sum of the two numbers


## Question 4
Develop an algorithm that prompts the user to enter the relevant data that is required to calculate the area of a circle, your algorithm must then calculate the area, the circumference and then display the following :
- The area of the circle 
- The circumference of the circle


## Question 6
Develop an algorithm that prompts the user to enter the relevant data that is required to  calculate the perimeter and area  of a rectangle and then display the following:
- The area of the rectangle
- The perimeter of the rectangle


## Question 8
Develop an algorithm that prompts the user for relevant data that is required to calculate an **hourly paid** worker's gross salary and net salary. **You are to assume that employees in this fictional scenario are paid per week and the only deduction that all employees incur is  a 25% tax on their gross salary.**


## Question 10
Develop an algorithm that prompts the user for relevant data that is required to calculate commission paid worker gross salary and net salary. Note, for this fictional scenario, commission paid workers receive a fixed salary plus 20% of the total sales they earn for that month. Like the above, **you are to assume that employees in this fictional scenario are paid per week.**


## Question 12
Develop an algorithm that prompts the user to enter a **price of an item, item number, item title and a discount percent** from the user which should represent the percentage that would be discounted from the item. 
The algorithm should then display the following:
- Original price of the item
- The discounted amount
- The amount the customer must pay.


## Question 14
Develop an algorithm that prompts the user to enter a person’s name and their weight in kilograms (kg).The algorithm should then convert the person’s weight in pounds and display the answer to the user. 
**NOTE : 1 kilogram = 2.2 pounds**


## Question 16
Develop a script using JavaScript, which, when run, works as follows:
Hi, what's your name ? **Mr.Best**
Welcome to our show, **Mr Best**
How old are you? **52**
Hmmmm, you don’t look a day over **47**
Tell me, Mr.Best , where do you live ? **Toronto**
Oh, I’ve heard **Toronto** is a lovely place


## Question 18
You have been contracted as a JavaScript programmer to develop a loan calculator for a Credit Union. The loan calculator must allow any user using the program to generate their monthly payments for a given loan amount based on a given annual interest rate. 

Your Loan Calculator **MUST** allow the user to enter the following data:-
 
1. **Loan Amount**
2. **Annual Interest Rate**
3. **Loan term(years)**

After the user enters the aforementioned data, the web application would then calculate the user Monthly Loan payment

Lastly, the loan calculator must print out the following information below:

**Loan Amount**
**Annual Interest Rate**
**Loan term(in months)**
**Monthly Payments**

**The calculations for calculating the monthly loan payments are as follows:**

-Get user loan amount
If the user enters 5000, Then 5000 becomes the user loan amount.

- Find the number of payments required on the loan. 
This is done by taking the value that the user entered in the “Loan term field (years)” and multiplying it by 12.
For Example, if the user entered 5 as the Loan term, then the number of payments required would be 60 (5*12).

- Calculate the monthly interest.
This is done by dividing the annual interest rate by 12.
For example if the user entered 5 as the annual interest then the monthly interest would be ((5/100)/12 ) this would equal to 0.00416

- Add 1 to the monthly interest rate just calculated
For example if the monthly interest rate was 0.00416, adding 1 to it would be it 1.00416

- Raise the above sum(1.00416) using a negative exponent of the number of loan payments required .
For example if you have to make 60 loan payments, you raise 1.00416 to the power of – 60.
This is done by writing this line of code “ Math.pow(1.00416 , -60) “. This should equal 0.779205.

- Subtract your above answer from 1
For example, 1 – (1.00416 to the power -60). This should equal to 0.2207946

- Multiply your monthly interest rate by the loan amount
The user monthly interest rate for this example is 0.00416 and their loan amount is 5000, thus 5000 * 0.00416 would equal to 20.8333

- Produce your monthly instalments by dividing the above answer from [ 1 – (1.00416 to the power -60) ].
For example 20.8333  /0.2207946 which would equal to 94.36
