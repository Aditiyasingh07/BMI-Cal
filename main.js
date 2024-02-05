const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const height = parseInt(document.getElementById('Height').value);
        const weight = parseInt(document.getElementById('Weight').value);

        const result = document.querySelector('#result');

        if (isNaN(height) || height <= 0 ||height === '') {
            result.innerHTML = 'Please give a valid Height!';
        } else if (isNaN(weight) || weight <= 0 || weight==='') {
            result.innerHTML = 'Please give a valid Weight!';
        } else {
            const bmi = (weight / ((height * height) / 10000)).toFixed(2);
            // result.innerHTML = `${bmi}`;

            //check conditions fro onder ,normal and over weight
            if(bmi < 19.5){
                result.innerHTML = `${bmi} Good Job! your are under weight.`;
                result.style.color = 'yellowgreen'
            }
            else if(bmi  >= 19.5 && bmi < 24.9){
                result.innerHTML = `${bmi} Your weight is normal.`;
                result.style.color = 'goldenrod'
            }
            else{
                result.innerHTML = `${bmi} You have overweight. Please consult a doctor.`;
                result.style.color = 'red'
            }
        }

    });