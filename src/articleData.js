import { faker } from '@faker-js/faker';

const articleData = [
    {
        avatar: faker.image.abstract(150,150),
        name: faker.company.bs(),
        desc: faker.name.jobTitle(),
        stars: "5",
        author: faker.name.firstName() + " " + faker.name.lastName()
    },
    {
        avatar: faker.image.abstract(150,150),
        name: faker.company.bs(),
        desc: faker.name.jobTitle(),
        stars: "5",
        author: faker.name.firstName() + " " + faker.name.lastName()
    },
    {
        avatar: faker.image.abstract(150,150),
        name: faker.company.bs(),
        desc: faker.name.jobTitle(),
        stars: "5",
        author: faker.name.firstName() + " " + faker.name.lastName()
    }
]

export default articleData;