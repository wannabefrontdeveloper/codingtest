const makePerson = ({familyName, givenName, address}) => {
    return {
        name: `${givenName} ${familyName}`,
        address,
    };
};

const person = makePerson({
    familyName: 'Kim',
    givenName: 'Jiwon',
    address: 'Gunpo',
    country: 'South Korea',
});
console.log(person);

/*
{

    name: 'Jiwon Kim',
    address: 'Gunpo'
}
*/