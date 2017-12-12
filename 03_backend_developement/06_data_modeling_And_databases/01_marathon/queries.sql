SELECT * FROM races WHERE race_name = 'New York City Marathon - Women' AND race_date > '2017-01-01';
SELECT * FROM races WHERE race_name = 'New York City Marathon - Men' ORDER BY runner_final_position limit 3;
SELECT * FROM races WHERE runner_racing_time < '02:30:00' AND runner_final_position > 100;
SELECT * FROM races WHERE runner_racing_time < '02:15:00';
