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