use library;
-- All data
SELECT *
FROM book
INNER JOIN author
ON book.author_id = author.id
INNER JOIN category
ON book.category_id = category.id;

-- Financial status
SELECT *,(stock*price) AS 'stock_price',(sales*price) AS 'sales_price'
FROM book
INNER JOIN author
ON book.author_id = author.id
INNER JOIN category
ON book.category_id = category.id;

-- Top sales
SELECT *
FROM book
ORDER BY sales DESC;

