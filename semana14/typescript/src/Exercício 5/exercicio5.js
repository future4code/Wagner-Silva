var AnnoDominiYear;
(function (AnnoDominiYear) {
    AnnoDominiYear["AC"] = "ac";
    AnnoDominiYear["DC"] = "dc";
})(AnnoDominiYear || (AnnoDominiYear = {}));
var era = function (ano, annoDomini) {
    switch (annoDomini) {
        case AnnoDominiYear.AC:
            if (ano > 4000) {
                return "Pré-História";
            }
            else {
                return "Idade Antiga";
            }
        default:
            if (ano < 476) {
                return "Idade Antiga";
            }
            else if (ano >= 476 && ano < 1453) {
                return "Idade Média";
            }
            else if (ano >= 1453 && ano < 1789) {
                return "Idade Moderna";
            }
            else {
                return "Idade Contemporânea";
            }
    }
};
console.log(era(1321, AnnoDominiYear.DC));
console.log(era(4356, AnnoDominiYear.AC));
console.log(era(2020, AnnoDominiYear.DC));
console.log(era(7000, AnnoDominiYear.AC));
