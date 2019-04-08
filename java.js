function wypisz()
{
    var do_wypisania = "";
    var ile_liczb = document.getElementById("ile_liczb").value;

    for (i=0; i<ile_liczb; i++)
    {

        do_wypisania = do_wypisania+'<input type="text" id="liczba'+i+'" class="licz" />';

        if (i==(ile_liczb-1))
        {
            do_wypisania = do_wypisania + '<input type="submit" value="SUMA" id="sumowanie" onclick="suma()"/>';
        }

        document.getElementById("liczby_do_wpisania").innerHTML = do_wypisania;
    }
}


var ile = document.getElementById("ile_liczb").value;

function suma()
{

    suma=0;
    var tablica = [];

    for (i=0; i<ile; i++)
    {
        tablica.push(document.getElementById("liczba"+i).value)
    }
    
    const tablica2 = tablica.map(x=> x*1);

    for(i=0; i<tablica2.length; i++)
    {
        suma = suma + tablica2[i];
    }

    alert(suma);
}

