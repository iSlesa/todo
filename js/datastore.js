data = [
			{
				"Task" : "Dance",
				"Label" : "Personal Development",
				"Remind" : ["4/4/2017","00:00"],
				"Done" : "0"
			},
			{
				"Task" : "ML Assignment",
				"Label" : "Study",
				"Remind" : ["0","0"],
				"Done" : "0"
			},
			{
				"Task" : "Laundry",
				"Label" : "Chores",
				"Remind" : ["0","0"],
				"Done" : "1"
			},
			{
				"Task" : "Dance",
				"Label" : "Personal Development",
				"Remind" : ["4/4/2017","00:00"],
				"Done" : "1"
			}
		]
lab = [
			{
				"Label" : "Personal Development",
				"Color" : "#FF6677"
			},
			{
				"Label" : "Chores",
				"Color" : "#FF2222"
			},
			{
				"Label" : "Study",
				"Color" : "#116789"
			}
		]

class LabelStore{
	constructor(jsonData){
		this.labels = jsonData;//JSON.parse(jsonData);
	}
	addLabel(label,color){
		this.labels.push(
			{
				Label: label,
				Color: color
			}
			);
	// Add to select
	var appendthis = '<option value="'+label+'">'+label+'</option>';
	$('option[value="0"]').before(appendthis);
	}

	removeLabel(label){
		lb = this.findLabel(label);
		if (this.labels.indexOf(lb) != -1){
			 array.splice(this.labels.indexOf(lb), 1);
		}
		//Remove from select
		$('select[name="label"]').find('option[value= '+label+']').remove();
	}

	findLabel(label){
		label = $.grep(this.labels, function(t) {
		  return t.Label === label;
		});
		return label[0];
	}
}

var lbl = new LabelStore(lab);

class DataStore{
	constructor(jsonData){
		this.tasks = jsonData; //JSON.parse(jsonData);
	}

	addTask(task){
		this.tasks.push(task);
		var item = $("<tr class='row'> <td class='col-xs-1 tick'> <input type='checkbox' class='check'> </td><td class='col-xs-6 text'> "+ this.tasks[this.tasks.length-1].Task + "</td> <td class='col-xs-2 label' style='background-color:"+lbl.findLabel(this.tasks[this.tasks.length-1].Label).Color +"'>" + this.tasks[this.tasks.length-1].Label + "</td> <td class='col-xs-2 redate'>" + this.tasks[this.tasks.length-1].Remind[0] +" "+ this.tasks[this.tasks.length-1].Remind[1] + "</td> <td class='col-xs-1 cross'> <button class='close'>&times;</button> </td> </tr>");
		$(".todo").append(item);
	}

	removeTask(task){
		if (this.tasks.indexOf(task) != -1){
			 array.splice(this.tasks.indexOf(task), 1);
		}
	}

	findTask(taskName, label){
		var task = $.grep(this.tasks, function(t) {
		  return t.Task === taskName && t.Label === label;
		});
		return task[0];
	}

	done(task){
		if (this.tasks.indexOf(task) != -1){
			 tasks.indexOf(task).done = 1;
		}
	}

	undone(task){
		if (this.tasks.indexOf(task) != -1){
			 tasks.indexOf(task).done = 0;
		}
	}

	display(){
		for (var i=0; i < this.tasks.length; i++){
			if (this.tasks[i].Done === "0"){
				console.log(lbl.findLabel(this.tasks[i].Label).Color);
				var item = $("<tr class='row'> <td class='col-xs-1 tick'> <input type='checkbox' class='check'> </td><td class='col-xs-6 text'> "+ this.tasks[i].Task + "</td> <td class='col-xs-2 label' style='background-color:"+lbl.findLabel(this.tasks[i].Label).Color +"'>" + this.tasks[i].Label + "</td> <td class='col-xs-2 redate'>" + this.tasks[i].Remind[0] +" "+ this.tasks[i].Remind[1] + "</td> <td class='col-xs-1 cross'> <button class='close'>&times;</button> </td> </tr>");
				$(".todo").append(item);
			}
			else{
				var item = $("<tr class='row'> <td class='col-xs-1 tick'> <input type='checkbox' class='check' checked> </td><td class='col-xs-6 text'> "+ this.tasks[i].Task + "</td> <td class='col-xs-2 label' style='background-color:"+lbl.findLabel(this.tasks[i].Label).Color +"'>" + this.tasks[i].Label + "</td> <td class='col-xs-2 redate'>" + this.tasks[i].Remind[0] +" "+ this.tasks[i].Remind[1]+ "</td> <td class='col-xs-1 cross'> <button class='close'>&times;</button> </td> </tr>");
				$(".done").append(item);
			}
		}
	}

	save(){
		file = JSON.stringify(tasks);
		// Save to file
	}
}

