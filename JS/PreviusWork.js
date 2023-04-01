window.onload = function(){
    document.getElementById('show').addEventListener('click', showInfo);
    document.getElementById('hide').addEventListener('click', hideInfo);
}

function showInfo(){
    console.log('Info is being run');

    const xml = new XMLHttpRequest();
    xml.open('GET', '/Json/work.json', true);
    xml.onload = function(){
        if(this.status === 200){
            const data = JSON.parse(this.responseText);
            let output = '';

            // Work experience
            output += '<h2>Work experience</h2>';
            output += '<ul>';
            data.forEach(function(work){
                if(work.company && work.position && work.description && work.date_range)
                output += `
                    <li>Company: ${work.company}</li> 
                    <li>Role: ${work.position}</li>
                    <li>Description: ${work.description}</li>
                    <li>Date of work: ${work.date_range}</li>
                    
                    <hr>
                    <br/>
                `;
            });
            output += '</ul>';

            // Education
            output += '<h2>Education</h2>';
            output += '<ul>';
            data.forEach(function(edu){
                if (edu.school) {
                    output += `
                        <li>School: ${edu.school}</li> 
                        <li>Program: ${edu.orientation}</li>
                        <li>Date of education: ${edu.date_edu}</li>
                        <li>${edu.info}</li>
                        <hr>
                        <br/>
                    `;
                }
            });
            output += '</ul>';

            document.getElementById('info').innerHTML = output;
            document.getElementById('show').style.display='none';
            document.getElementById('hide').style.display='block';
        }
    }
    xml.send();
}

function hideInfo(){
    document.getElementById('info').innerHTML = "";
    document.getElementById('show').style.display='block';
    document.getElementById('hide').style.display='none';
}