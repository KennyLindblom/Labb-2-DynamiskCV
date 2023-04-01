window.onload = function(){
    document.getElementById('showEd').addEventListener('click', showEducation);
    document.getElementById('hideEd').addEventListener('click', hide);
}

function showEducation(){
    console.log('Previous education is being run')

    const xml = new XMLHttpRequest();
    xml.open('GET', '/Json/education.json', true)
    xml.onload = function(){
        if(this.status === 200){
            const education = JSON.parse(this.responseText);
            let output = '';
            education.forEach(function(edu){
                outputEdu += `
                <ul>
                    <li>School: ${edu.school}</li> 
                    <li>orientation: ${edu.orientation}</li>
                    <li>description: ${edu.description}</li>
                    <li>Date of education ${edu.date_range}</li>
                    <hr>
                    <br/>
            </ul>
                `;
            });
            document.getElementById('previousEducation').innerHTML = output;
            document.getElementById('show').style.display='none';
            document.getElementById('hide').style.display='block';

            
        }
    }
    xml.send();


}


function hideEducation(){
    document.getElementById('previousEducation').innerHTML = "";
    document.getElementById('showEd').style.display='block';
    document.getElementById('hideEd').style.display='none';

}