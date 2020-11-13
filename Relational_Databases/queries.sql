/*
Powerful Queries
*/

-- sum the no of payments for each user
SELECT customer_name, count(*) as count
FROM payments
GROUP BY customer_name
ORDER BY count DESC;

-- sum the payment amounts for each month
SELECT sum(amount) as sum, extract(year from processed_at) as year, extract(month from processed_at) as month 
FROM payments 
GROUP BY month,year 
ORDER BY sum DESC;

-- sum the payment amounts for each month for each user
SELECT customer_name, sum(amount), extract(year from processed_at) as year, extract(month from processed_at) as month 
FROM payments
GROUP BY customer_name,month,year
ORDER BY customer_name DESC;

-- find the largest single-user payments for each month
SELECT max(amount),year,month
FROM (
    SELECT customer_name, sum(amount) as amount , extract(year from processed_at) as year, extract(month from processed_at) as month 
    FROM payments
    GROUP BY customer_name,month,year
) AS monthly_sums
GROUP BY year,month;

-- for postgres BEGIN TRANSACTION

START TRANSACTION;
UPDATE balances SET balance = balance - 100 WHERE username = 'clement';
UPDATE balances SET balance = balance + 100 WHERE username = 'antoine';
COMMIT;

-- find the 10 largest ints
SELECT * FROM large_table  ORDER BY random_int DESC LIMIT 10;

-- create an index on the ints in the table
CREATE INDEX large_table_random_int_idx ON large_table(random_int);



