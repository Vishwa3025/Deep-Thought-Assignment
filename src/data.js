const data = [
    {
        "AccountName": "Current Account",
        "BankBalance": "XXXXX",
        "transactionamount": 15000,
        "transactiondate": "12 Aug 2022, 03:55 PM",
        "PaymentType": {
            "Id": "X",
            "Name": "Bank to Wallet Transfer"
        },
        "senderDetails": {
            "sender": "Saurabh Sharma",
            "bank": "SBI",
            "IFSC": "SBIN016095",
            "accountno": "XXXXXXXXX5736",
            "transactiondate": "12 Aug 2022, 03:55 PM"
        },
        "recieverDetails": {
            "reciever": "Saurabh Sharma",
            "wallet": "Growpital Wallet",
            "referenceno": "DBTR/222201998174",
            "transactiondate": "12 Aug 2022, 03:55 PM"
        },
        "paymentmethod": "UPI",
        "transactionId": "DBTR/222201998174"
    },
];

export function getData() {
    return data;
}