<html>
	<head>
	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
	<link href="main.css" rel="stylesheet">
	<script src="https://code.jquery.com/jquery-2.1.4.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	<style>
		.item, .placeholder 
		{
			padding: 2px;
			width: 50px;
			height: 20px;
			border: 1px solid #333;
			background: #EEE;
		}

		.placeholder 
		{
		    background: #AEF;
		}
	</style>
	</head>
	<body>
		<div class="container">
			<div class="row">
				

<h3> Instruction Sequence </h3>
		<div ng:controller="controller" class="col-md-12" style="padding-top:20px" >
			<button class='btn btn-default' id='playT' ng-click='resumeTraj()' disabled> Play</button>
			<button class='btn btn-default' id='stopT' ng-click='stopTraj()' disabled> Stop</button>
			<button class='btn btn-default' id='capT' ng-click='capTraj1()' disabled> Capture WayPoint</button>
			<button class='btn btn-default' id='nextT' ng-click='capTraj2()' disabled> Capture nextPoint</button>
			<br>

		    <ul ui:sortable ng:model="instructionSet">
		       <li ng:repeat="item in instructionSet">
		       	<div class="">
		       		 <div class="notice notice-success">

			   <form class="form-inline">
		       <select  class="form-control" ng-model="item.predicateVal" ng-options="predicate.id as predicate.name for predicate in pedicateList"></select>
		       	<select  class="form-control" ng-model="item.objVal" ng-options="object.id as object.name for object in objectList"></select>
		       		<select  class="form-control" ng-model="item.subVal" ng-options="subject.id as subject.name for subject in subjectList"></select>
		       		<button class="playbtns pull-right btn btn-default" ng-click="playTraj($index)"><i class="glyphicon glyphicon-play  " style="height:30px;padding-left:20px"></i> </button>

		       		<i class="glyphicon glyphicon-remove pull-right" style="height:30px" ng-click="deleteElement($index)"></i>
		       	</form>

			    </div>

		       
        	</div>
    		</li>
		    </ul>
		    <button ng-click='saveSequence()' class="btn btn-default pull-right">Save Sequence </button> <br><br>

		    <hr />
		    <!-- <div ng:repeat="item in list">{{item}}</div> -->
		    <h3> Add Instruction </h3>
	<div class="notice notice-info">
		    <form class="form-inline" ng-submit='addEntry(submitForm)'>
		       <select  class="form-control" ng-model="submitForm.predicateVal" ng-options="predicate.id as predicate.name for predicate in pedicateList"></select>
		       	<select  class="form-control" ng-model="submitForm.objVal" ng-options="object.id as object.name for object in objectList"></select>
		       		<select  class="form-control" ng-model="submitForm.subVal" ng-options="subject.id as subject.name for subject in subjectList"></select>
		       	<button class='btn btn-default' type="submit">Add Element</button>
		       	</form>
		       </div>

<!-- {{instructionSet}} -->

		</div>
	</div>
</div>


		<script src="https://code.jquery.com/ui/1.11.3/jquery-ui.js"></script>
		<script src="http://code.angularjs.org/1.0.2/angular.min.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/angular-ui/0.4.0/angular-ui.min.js"></script>
		<script src="mainCtrl.js"></script>

	</body>
</html>