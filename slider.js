var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
var graph_label1 = document.getElementById('label1');
var iframe1 = document.getElementById('iframe1');
var graph_label2 = document.getElementById('label2');
var iframe2 = document.getElementById('iframe2');

output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

if (output.innerHTML > 200000) {
    graph_label1.textContent = "Non-HISPANIC Data in Counties with 200000+ Population";
    graph_label2.textContent = "HISPANIC Data in Counties with 200000+ Population";
    link1 = "6";
    link2 = "4";
}
else if (output.innerHTML <= 200000 && output.innerHTML > 100000) {
    graph_label1.textContent = "Non-Hispanic Data in Counties with 100000-200000 Population";
    graph_label2.textContent = "Hispanic Data in Counties with 100000-200000 Population";
    link1 = "10";
    link2 = "8";
}
else if (output.innerHTML <= 100000 && output.innerHTML > 60000) {
    graph_label1.textContent = "Non-Hispanic Data in Counties with 60000-100000 Population";
    graph_label2.textContent = "Hispanic Data in Counties with 60000-100000 Population";
    link1 = "14";
    link2 = "12";
}
else if (output.innerHTML <= 60000 && output.innerHTML > 45000) {
    graph_label1.textContent = "Non-Hispanic Data in Counties with 45000-60000 Population";
    graph_label2.textContent = "Hispanic Data in Counties with 45000-60000 Population";
    link1 = "18";
    link2 = "16";
}
else if (output.innerHTML <= 45000 && output.innerHTML > 15000) {
    graph_label1.textContent = "Non-Hispanic Data in Counties with 15000-45000 Population";
    graph_label2.textContent = "Hispanic Data in Counties with 15000-45000 Population";
    link1 = "22";
    link2 = "20";
}
else if (output.innerHTML < 15000) {
    graph_label1.textContent = "Non-Hispanic Data in Counties with <15000 Population";
    graph_label2.textContent = "Hispanic Data in Counties with <15000 Population";
    link1 = "26";
    link2 = "24";
}

function submitted() {
    var graph_label1 = document.getElementById('label1');
    var iframe1 = document.getElementById('iframe1');
    var graph_label2 = document.getElementById('label2');
    var iframe2 = document.getElementById('iframe2');
    link = document.getElementById("dynamic_select").value;

    switch (link) {
        case 1:
            graph_label1.textContent = "Non-HISPANIC Data in Counties with 200000+ Population";
            graph_label2.textContent = "HISPANIC Data in Counties with 200000+ Population";
            link1 = "6";
            link2 = "4";
            break;
        case 2:
            graph_label1.textContent = "Non-Hispanic Data in Counties with 100000-200000 Population";
            graph_label2.textContent = "Hispanic Data in Counties with 100000-200000 Population";
            link1 = "10";
            link2 = "8";
            break;
        case 3:
            graph_label1.textContent = "Non-Hispanic Data in Counties with 60000-100000 Population";
            graph_label2.textContent = "Hispanic Data in Counties with 60000-100000 Population";
            link1 = "14";
            link2 = "12";
            break;
        case 4:
            graph_label1.textContent = "Non-Hispanic Data in Counties with 45000-60000 Population";
            graph_label2.textContent = "Hispanic Data in Counties with 45000-60000 Population";
            link1 = "18";
            link2 = "16";
            break;
        case 5:
            graph_label1.textContent = "Non-Hispanic Data in Counties with 15000-45000 Population";
            graph_label2.textContent = "Hispanic Data in Counties with 15000-45000 Population";
            link1 = "22";
            link2 = "20";
            break;
        case 6:
            graph_label1.textContent = "Non-Hispanic Data in Counties with <15000 Population";
            graph_label2.textContent = "Hispanic Data in Counties with <15000 Population";
            link1 = "26";
            link2 = "24";
            break;
    }

    document.getElementById("iframe1").src = "https://plotly.com/~jcho1260/"+link1+".embed";
    document.getElementById("iframe2").src = "https://plotly.com/~jcho1260/"+link2+".embed";
}


