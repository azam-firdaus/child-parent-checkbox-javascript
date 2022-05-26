# Child-parent-checkbox-javascript
##### _Auto check/uncheck checkbox based on topic/subtopic using javascript_

## Setup
- In this example, the parent/child is such that:
Note :- All the data are connected based on symbols as shown in the bracket next to text
```
Aspek (A)
├── Parameter (A1)
│   ├── Indikator (A1.1)
│   ├── Indikator (A1.2)
│   └── Indikator (A1.3)
└── Parameter (A2)
    ├── Indikator (A2.1)
    └── Indikator (A2.2)
Aspek (B)
├── Parameter (B1)
│   ├── Indikator (B1.1)
│   ├── Indikator (B1.2)
│   └── Indikator (B1.3)
└── Parameter (B2)
    ├── Indikator (B2.1)
    └── Indikator (B2.2)
```

- In this example, all the data are presented in a table for easy viewing
- There will be a checkbox next to each text in the table for ease of understanding

## Usage
The javascript code will allow such action

- Once a children data/indikator such as A1.1 is checked, all the parents will also be automatically checked, in this case, parameter(A1) and aspek(A) will be checked.
- If no indikators (example A1.1) are checked, but the parameter (A1) is checked, all the associate indikator will be checked. Example, if none of A1.1, A1.2 and A1.3 are checked, but if A1 is checked, A1.1, A1.2 and A1.3 will also be automaticcaly checked.
- If none of parameter(A1, A2) are checked, but the aspek(A) is checked, all the associate children (A1, A2, A1.1, A1.2, A2.1 etc) will be checked.
- Unchecked a checked parent will also uncheck ALL of it's children. Example, if parameter A1 is unchecked, A1.1, A1.2, A1.3 will also be unchecked. Same goes if Aspek(A) is unchecked.
