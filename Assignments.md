# Date: 23-Feb-2022
1. Explor the forEach(), map() and filter() methods of Array class and show its difference with example (Today)
2. Define an array of string and perform following operations  on ie=t
    - Sort an array based on Length of each String in array in ascending and descending order (HINT: sort()) (Today)
    - Sort an array based on alphabetic order of each string in array
3. use the following string to find out count of statements and count of words and print them
    Indiana Jones is an American media franchise based on the adventures of Dr. Henry Walton "Indiana" Jones, Jr., a fictional professor of archaeology, that began in 1981 with the film Raiders of the Lost Ark. In 1984, a prequel, The Temple of Doom, was released, and in 1989, a sequel, The Last Crusade. A fourth film followed in 2008, titled The Kingdom of the Crystal Skull. A fifth film is in production and is provisionally scheduled to be released in 2023. The series was created by George Lucas and stars Harrison Ford as Indiana Jones.

In 1992, the franchise expanded to a television series with The Young Indiana Jones Chronicles, portraying the character in his childhood and youth, and including adventures with his father. Marvel Comics began publishing The Further Adventures of Indiana Jones in 1983, and Dark Horse Comics gained the comic book rights to the character in 1991. Novelizations of the films have been published, as well as many novels with original adventures, including a series of German novels by Wolfgang Hohlbein, twelve novels set before the films published by Bantam Books, and a series set during the character's childhood inspired by the television show. Numerous Indiana Jones video games have been released since 1982.    


#Date:24-Feb-2022

1. Complete code in app.ts of app folder


# Date: 28-Feb-2022

1. Create a Calculator which looks like a calculator with following functionalities
    - +,-,*,/
    - Power usi Math.power()
    - Square Root   
2. Create a CheckBox List for courses using following mechanism
    - Create an array of Courses as follows
        - Course = [{CourseName: "JavaScript", Fees:20000}
        ,{CourseName: "Angular", Fees:30000},{CourseName: "React", Fees:40000},{CourseName: "Node.js", Fees:60000},{CourseName: "VueJS", Fees:80000}];    
    - The Value of each generate Checkbox will bound with the 'Fees' property of the array and Text property will be bound to 'CourseName'
    - When Checkbox is checked the TotalCourseFees for selected checkboxes should be displayed at the end of the CheckboxList       


# Date: 01-March-2022

1. Create a DataGrid Component generated using a HTML Table. This component MUSt have following specifications
    - The DataSource property as Input property based on which the Columns and Rows are generated Dynamically
    - The CanDelete property as Input property, if this property is 'true' then  based on this value each row will generate a button with 'Delete' text on it. When this button is clicked, the row MUST be deleted from Parent Component
    - The CanSort property, if this is true, then the table MUST be sorted in ascending order based on 'SortKey' passed by the Parent
        - e.g. if DataSource is Employee Collection , then the SortKey can be EmpName and CanSort is true, the the Table should show data in Sorted order by EmpName      

# Date: 02-March-2022

1. Create a Custom Directive of name CheckUnique with selector as '[checkUnique]'
    - THis directive will be activated based on 'change' event on input:text element to make sure that the value entered in the input:text element is unique. If the value is not unique then the borderColor of the input:text will be read 
        - input type="text" [checkUnique]="EmpNo", the EmpNo MUSt be unique 
2. Complete the ProductFormComponent for all Properties of Product Model class   
    - ProductId MUST be Required and Must be String
        - Write a Custom Validator to make sure that the ProductId is not repeated 
            - Consider using the Logic class in Custom Validator
    - ProductName MUST be Required and Must be String and MUST start from UpperCase Character

# Date:03-March-2022

1. Create a ProductComponent that will accept following information from the End-User
    - ProductRowId, ProductId, ProductName, CateogryName, Description, BasePrice
    - Once the 'Save' button is clicked the Product data will be passed to ProductListComponent
2. Create a ProductListComponent that will show all Products Data in HTML Table
    - This table will have Update button in each row  
    - When a Update button is clicked in a table row, the product details of the selected row must be passed to ProductComponent where end-user can update these details and once click on 'Save' button, these updated details will be shown back in the ProductListComponent
3. Add a component named SearchComponent which will have a DropDown that will have following values 
    - CategoryName
    - Manufacturer
   - This component will also have the input:text element to accept searched data
   - When 'CategoryName' is chosen from DrownDown list and value of CategoryName is entered into the input:text, the ProductListComponent should show only those products od the CategoryName value, repeat the same for Manufacturers                    

# Date: 04-March-2022

1. Create a REST API that will perform for search operations of any of the following
    - Product Search: Based on CategoryName OR Manufacturer and return searched Product as pagination of 10 products per search HTTP call.
        - You are free to select number of records to be fetched from the server
        - You can pass the value for number of records to be fetched from REST API from UI
    - The searched result must be shown on Angular Component in HTML Table 
        - The Component will access the Angular service that will contain following method
            - searchProduct(criteria):Observable<Products[]>
                - Criteria value will be as follows
                    - criteria= 'CategoryName='Electronics''
                    - criteria= 'Manufacturer='Bajaj''

# Date:07-March-2022

1. Create Following Components
    - ListComponent
        - This will Show List of Products/Departments/Employees in an HTML Table by making HTTP call to REST API 
        - Each Row of the Table will have an Edit and Delete Button
            - When an Edit button is clicked, the navigation MUST takes place to Edit Component
            - When an Delete button is clicked, the navigation MUST takes place to Delete Component
    - CreateComponent
        - This will create new  Product/Department/Employee after clicking on 'Save' button by  making HTTP call to REST API
        - Once the call is successful, the navigation MUST happened to ListComponent
    - EditComponent
        - This component will read the 'id' from the Route URL and fetch Product/Department/Employee data by making call to REST API and will show this data in UI for updates
        - This will Edit  Product/Department/Employee after clicking on 'Save' button by  making HTTP call to REST API
        - Once the call is successful, the navigation MUST happened to ListComponent     
    - DeleteComponent
        - This component will read the 'id' from the Route URL and fetch Product/Department/Employee data by making call to REST API and will show this data in UI for delete
        - This will delete  Product/Department/Employee after clicking on 'Save' button by  making HTTP call to REST API
        - Once the call is successful, the navigation MUST happened to ListComponent   

    - MainComponent, this will by default will show the ListComponent and following two hyperlinks
        - List and Add
            - List link, will navigate to ListComponent
            - Add link, will navigate to CreateComponent      
         
# Date: 08-March-2022

1. Write a test on ProductComponent for Following
    - Please check if the Products Array is added with new Product data when the Save Button is clicked
    - Please check if the HTML Table is added with a new row when the save button is clicked