var ctx = document.getElementById("grafica").getContext('2d');
    
// Initialize Firebase
var config = {
    apiKey: "AIzaSyC8ukNQjLnKL2-FmI8U-2hP-X6_x_kMk_0",
    authDomain: "proyecto-final-6a3e8.firebaseapp.com",
    databaseURL: "https://proyecto-final-6a3e8.firebaseio.com",
    projectId: "proyecto-final-6a3e8",
    storageBucket: "proyecto-final-6a3e8.appspot.com",
    messagingSenderId: "1050399722895"
};

firebase.initializeApp(config);

var database = firebase.database();

var agua = 0;
var energia_electrica = 0;
var basura = 0;
var calle=0;

database.ref("formulario").on("value", function(snapshot) {
    var data = snapshot.val();
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const element = data[key].tipo_problema;

            if (element == "Agua") agua++;
            if (element == "Energia Electrica") energia_electrica++;
            if (element == "Basura") basura++;
            if (element == "Calle") calle++;
        }
    }

    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Agua", "Energia Electrica", "Basura","Calle"],
            datasets: [{
                label: '# grafico',
                data: [agua, energia_electrica, basura,calle],
                backgroundColor: [
                 "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"
                ],
                borderColor: [
                    "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"
                ],
                borderWidth: 1
            }]
         },
            
    }); 
});