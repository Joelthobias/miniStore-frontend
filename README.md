the mini-store ecommerce webiste for studnets to buy basic utlits .
the store is designed in a way that students can order the utlits from site and pay and collect them form staff room in the next day.So that they can avoid waiting for records and such for days without knowing the availability of the .All they have to do is check the website for purcahse and availability.
The teachers can recive information about students realted the purcahse of lab records .


###the structure.

there is user and admin and observers.
the users [Students] have access to home,product page,cart,checkout,orders,signup,login,profile pages
the Admin have acess to Dashboard,order list,add product,edit prodcuts,delete products,product count update
the observers [staff] have the acess to the order list and mark them payment recived and devliverd


user [Students] - name,email,prno,mobile,semester,department,password
user [Students] login with mobile and passowrd.
siginup with name,prno,mobile,passowrd .
user [Students] neeeds to verify their mobile number by entering otp they recived by sms.

Home page - products will be listed with image.title,description,price and add to cart button
when clicking the add to cart button that item will added to cart and the counter near the cart icon in navbar will be updated

Cart - products added to cart will be displayed with image,title,quantity,price per unit,total per product and grand total.
there will be continue shopping and checkout buttons with functions as their name suggests

Checkout - the user info and  order info will be dispalyed with grand total and there will be a complete checkout and cancel button.
after complete checkout is clicked a message will be showed completion of order and a sms will be sended to the registed mobile number

Orders -order history will be displayed with the following info : orderid,date,total,semster
when the order div is clicked the detailed info will shown with a collapse .
the detailed info will contain order id ,date purchased,semster purchased,status[deliverd,cancelled],prodcut info[title,quantity,price per one,total for a product] and sub total

profile - the user info will be displayed and last 5 orders will be shown

Observers - they are the person in charge of each clasess of each semsters and departments.
they can see the order info and mark the order status as deliverd or cancelled.
they can sort the order by time, stdudent,semster
this enables the class in charge to know that which students havent purchased the records and essnetial prdocuts

Observers have name,id,staff id,mobile,email,department,represnating semster/class

Admin - admin can login with separted page/login with their mobile and password