console.log('Hello, world!');
phantom.exit();


1) name of model 
mongoose.model( 'release', releaseSchema );

2) schema to compile
var releaseSchema = new mongoose.Schema({
	projectname      :{type:String, unique:true},
	createdon        :{type:Date, default:Date.now},
	requestedby      :String,
	branch           :String,
	tag              :String,
	environment      :String,
	futuredate       :{type:Date},
	snapshot-release :String,
	Version-artifact :String,
	actualstartdate  :Date,
	actualenddate    :Date,
	actualreleaseflag:projectName( planned activeity...)	"Planned activity"	
})


1) plannedactivity      -- 0
2) actuall no plan      -- empty
3) actual -> planned    -- plan number.

app.get('/user', user.index);          // Current user profile
   app.get('/user/new', user.create);     // Create new user form
   app.post('/user/new', user.doCreate);  // Create new user action
   app.get('/user/edit', user.edit);      // Edit current user form
   app.post('/user/edit', user.doEdit);   // Edit current user action
   app.get('/user/delete', user.confirmDelete); // delete current
                                               //user form
   app.post('/user/delete', user.doDelete);     // Delete current
   



from Glen to Everyone:
http://dev.day.com/docs/en/crx/current/how_to/package_manager.html
from Bill Heller to Everyone:
http://wikibot.cisco.com:9001/p/citiesAdmin