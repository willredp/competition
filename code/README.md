# brackets_adjuster

I saw a project on github and want to make changes to how it works. The ui file is under the demo folder. Below are the Current and Updated section of how I want the changes to be.

CURRENT: 

<img src="https://github.com/thebeginner123/brackets_adjuster/blob/main/images/readme_original.PNG" alt="drawing" width="500"/>

UPDATED:

I want the project to be changed in the following ways:

* Use a dynamic data source. In this example I have created db.json to use. To run the data source I use "npx json-server --watch db.json". Once a change is made in the db it must automatically be reflected before the bracket is created. For example if the "firstname" is "Adam" and changes to "Gabe" in the json file it should automatically change in the ui. 
* Multiple brackets to reflect all the necessary ones from the db.json file. The current one only allows to create one at a time however I want it to have an unlimited amount depending on the number from the db. For example there should be 4 from this example db with the "Name your Stage" being the identifier (under 66kgs, under/73kgs, under/57kgs and under/81kgs).
* I want a block around each of the first keys for example in this example it should be around SENIOR MEN, SENIOR WOMEN and JUNIOR MEN.
* "Name your stage:" should be from the data source and not an input value option anymore
* "Name your teams:" should be from the data source and not an input value option anymore

<img src="https://github.com/thebeginner123/brackets_adjuster/blob/main/images/readme_step_1.png" alt="drawing" width="500"/>

* Once created I want the "Name your stage:" and "Name your teams:" data to remain.
* Must show "Go to Bracket"

<img src="https://github.com/thebeginner123/brackets_adjuster/blob/main/images/readme_step_2.png" alt="drawing" width="500"/>

* Once "Go to Bracket" is clicked it must show it...

<img src="https://github.com/thebeginner123/brackets_adjuster/blob/main/images/readme_step_3.png" alt="drawing" width="500"/>
