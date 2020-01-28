import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from "./types";

export function setPurchaseDetail(_id) {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: "A0048248343",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Jordan Hudgens",
                    shippingAddress: "1234 West State Street"
                }

            },
            {
                _id: 1,
                total: 5.20,
                orderNumber: "B86kdi48343",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Maxwell Nelson",
                    shippingAddress: "1337 Broad Way"
                }

            },
            {
                _id: 2,
                total: 22.90,
                orderNumber: "654sadf8e2",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Chanse Westby",
                    shippingAddress: "396 Bellflower"
                }

            },
            {
                _id: 3,
                total: 21.25,
                orderNumber: "4s8fe2sf8e4",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Jim Butcher",
                    shippingAddress: "13666 Bad Luck Street"
                }

            },
            {
                _id: 4,
                total: 10.10,
                orderNumber: "14f5v32d9t5",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Ben Teuan",
                    shippingAddress: "8214 Klobbering Street"
                }

            },
            {
                _id: 5,
                total: 3.70,
                orderNumber: "j14df8h23j6",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "James Holden",
                    shippingAddress: "1020 Rocinante Way"
                }

            },
            {
                _id: 6,
                total: 2.70,
                orderNumber: "5h4d19t3eg2",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Amos Burton",
                    shippingAddress: "629 Mean Streets"
                }

            },
            {
                _id: 7,
                total: 11.10,
                orderNumber: "Bf4n2f5d4e",
                orderDate: new Date().toDateString(),
                creditCard: "-0000",
                user: {
                    name: "Thomas Raith",
                    shippingAddress: "50 Silver Lake Drive"
                }

            },
        ]
    })
}