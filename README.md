# UOP_SE_Y3S2-PUSL3111_API_SOFTWARE_DEVELOPMENT

## Coursework
This coursework for PUSL3111 is worth 60% of the module marks and contains two deliverables: A working API web application and a report. You may form in to groups of maximum six members by yourself and enroll the groups in the DLE. 

#### A scenario for the project 
Center for Disease Control and Prevention (CDC) is the main body in managing the pandemic situations such as COVID-19 in Sri Lanka. With the help of the ministry of health and Public Health Inspectors (PHI) the CDC is planning to establish an internet service where the citizens can report their locations when they are moving one place to another. CDC hired you to develop a web API which can facilitate the below requirements.
i.	Any citizen can become a member through a free online registration.
ii.	The citizens must update their current location when they travel by scanning a QR code at every super market, food outlets, schools, etc.
iii.	The PHI officers monitor the citizens and update the PCR or Antigen test results for each individual. 
iv.	The immediate contacts of the COVID positive patients are then traced by the CDC. 
#### Deliverable 1
Develop a RESTful API web application to address the above scenario. You should alter the path examples below according to the situation (e.g.: just like adding members [or in other words registering themselves]) but all the functional requirements must be satisfied. According to the scenario you should also suggest then implement APIs to address item (i) to (iv).

###### Minimal Required APIs
•	POST 	/citizens

Citizens and PHIs can register themselves with details including a national ID, name, age, address, current location (latitude and longitude), profession, email, affiliation, password, health status, etc.

•	GET	/citizens/:nid

PHI or CDC officers can collect the details of any citizen.

•	PUT	/citizens/:nid

Individual citizens should be able to update their current locations.

•	PUT	/citizens/:nid

While the PHIs should be able to update the citizen’s health status (such as COVID positive or negative, deceased, recovered, etc.)

•	DELETE	/citizens/:nid

The CDC staff can deactivate an individual’s account if the patient is deceased.

•	GET	/citizens/:nid/contacts

The CDC staff should be able to collect information about contacts of any citizen.

It is very important that your APIs work, the public interfaces you create should conform to industry good practices (security, paging, documentation, ease of understanding, etc.) for creating web APIs. The web API should be developed using Java, C#, PHP, React JS, or Ruby on Rails. The interface must use the REST architecture and deliver the data in both XML and JSON formats. You must also develop two example client applications, a mobile app and any other client such as a web application, standalone application, etc. that consume your own API.

#### Deliverable 2
Write a comprehensive report containing documentation for your API, tools and technologies, individual contributions, and certificates. You must also include the controller classes as an appendix of the report. 
API Documentation
List down all the APIs in your project including the routes, parameters, and a description. For each and every method there must be supporting evidence such as screenshots of code and run-time results. 
Tools & Technologies
Discuss why you have selected your platform and how you have tested your APIs before releasing to public.
Individual Contribution 
Each and every member should write a full page of his/her contribution. All members must contribute development of the API. All members should attach evidence of the LinkedIn certificates/screenshots.
###### Detailed Assessment Criteria
| Category and Weighting | Criteria | Marks | LOs |
| --------------- | --------------- | --------------- | --------------- |
|API Implementation 60% |[1]	API implemented and presented with appropriate documentation [implementing only the minimal requirement results half of the marks offered 40/2].[2] Design clearly illustrated within the website documentation and clearly evident in architecture. [3] Developer resources for API conform to industry good practice. [4] Source code runs with test data. [5] Data is inserted, edited and retrieved from the MySQL or any other database. [6] API conforms to RESTful principles 	| [1]40 [2]20 [3]10 [4]05 [5]15 [6] 10	| LO2|
|Evaluation Report 30% |[1]	Style of report is clear, professional and has a logically developed thread of argument throughout.[2] Appropriate academic and industry literature is used to support discussion. [3] Client application, tools & technique used for evaluation clearly described and illustrated. [4] Proper APIs documentation	20 | [1]20 [2]20 [3]30 [4]30 | LO1 LO3|
|LinkedIn Certificate 10% |Each and every member should follow the course "Introduction to Web APIs by: Andrew Probert" in LinkedIn Learning Center. https://www.linkedin.com/learning/introduction-to-web-apis/filter-response-with-parameters?u=26140778 The marking is based on the following criteria: o	Certificate: 100% o	No certificate, but completed the course: 80% o	No certificate, incomplete, but tried the course: 25% o	None: 0% •	You must attach evidence such as a certificate or screen shot of the course progress.	| 100	| LO1 LO2 LO3|

## License

**Copyright (c) Ranul Ladduwahetty. All rights reserved.**

Licensed under the [MIT](LICENSE.txt) license.

All files and information are copyright by Ranul Ladduwahetty, 
and may not be duplicated, copied, sell, modified or adapted, 
in any way without our written permission. 
Our product may contain our service marks or trademarks as well as those of our affiliates or other companies, 
in the form of words, graphics, and logos.
This product is solely an property of Ranul Ladduwahetty and holds all rights to it, any copying, redistribution, use or publication by you of any such Content, is strictly prohibited. 
Your use of our Product and Services does not grant you any ownership rights to our Product.
