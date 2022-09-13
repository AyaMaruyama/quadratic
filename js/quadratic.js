function Quadratic(){
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let c = document.getElementById('num3').value;

    if(a === '' || b === '' || c === '') {
        alert('Заполните все поля!');
        return;
    }
    if (a == 0){
        alert('Если А = 0, то это уже не квадратичное уравнение. Введите другое значение А.')
        return;
    }else{
        try {
            a = a / 1;
            b = b / 1;
            c = c / 1;
            if(Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)){
                alert('Неверный тип параметра. Введите число.');
                return;
            }
        } catch {}
    
        let d = (b*b) - (4 * a * c)
        if (d < 0){
            alert('Корней нет')
            return;
        }
        if (d === 0){
            let x = (-b)/(2 * a)
            document.getElementById('values').innerHTML = "<hr>" + "A = " + a + "<br>" + "B = " + b + "<br>" + "C = " + c + "<br><br>" + "D = " + d + "<br>" ;
            document.getElementById('text').innerHTML = "X = " + x;   
        }else{
        
            let x1 = (-b + Math.sqrt(d)) / (2*a)
            let x2 = (-b - Math.sqrt(d)) / (2*a)
        
            document.getElementById('values').innerHTML = "<hr>" + "A = " + a + "<br>" + "B = " + b + "<br>" + "C = " + c + "<br><br>" + "D = " + d + "<br>" ;
            document.getElementById('text').innerHTML = "X<sub>1</sub> = " + x1 + "<br>" + "X<sub>2</sub> = " + x2;
        }
    }
}

