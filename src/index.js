module.exports = function toReadable (number) {
  if(!number){return 'zero'}
    let s = [];
    switch(~~(number/100)){
        case 1:
            s.push('one hundred');
            break;
        case 2:
            s.push('two hundred');
            break;
        case 3:
            s.push('three hundred');
            break;
        case 4:
            s.push('four hundred');
            break;
        case 5:
            s.push('five hundred');
            break;
        case 6:
            s.push('six hundred');
            break;
        case 7:
            s.push('seven hundred');
            break;
        case 8:
            s.push('eight hundred');
            break;
        case 9:
            s.push('nine hundred');
            break;
    }
    
    switch(~~(number%100/10)){
        case 2:
            s.push('twenty');
            break;
        case 3:
            s.push('thirty');
            break;
        case 4:
            s.push('forty');
            break;
        case 5:
            s.push('fifty');
            break;
        case 6:
            s.push('sixty');
            break;
        case 7:
            s.push('seventy');
            break;
        case 8:
            s.push('eighty');
            break;
        case 9:
            s.push('ninety');
            break;
    }

    switch(number%100){
        case 10:
            s.push('ten');
            number = 0;
            break;
        case 11: 
            s.push('eleven');
            number = 0;
            break;
        case 12:
            s.push('twelve');
            number = 0;
            break;
        case 13:
            s.push('thirteen');
            number = 0;
            break;
        case 14:
            s.push('fourteen');
            number = 0;
            break;
        case 15:
            s.push('fifteen');
            number = 0;
            break;
        case 16:
            s.push('sixteen');
            number = 0;
            break;
        case 17:
            s.push('seventeen');
            number = 0;
            break;
        case 18:
            s.push('eighteen');
            number = 0;
            break;
        case 19:
            s.push('nineteen');
            number = 0;
            break;
    }

    switch(number%10){
        case 1:
            s.push('one');
            break;
        case 2:
            s.push('two');
            break;  
        case 3:
            s.push('three');
            break;
        case 4:
            s.push('four');
            break;
        case 5:
            s.push('five');
            break;
        case 6:
            s.push('six');
            break;
        case 7:
            s.push('seven');
            break;
        case 8:
            s.push('eight');
            break;
        case 9: 
            s.push('nine');
            break;
    }
    return s.join(' ');
}
