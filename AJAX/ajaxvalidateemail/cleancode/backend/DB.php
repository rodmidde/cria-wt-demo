<?php
/**
 * Class that abstracts the database connection and database operations.
 * @author Rody Middelkoop
 */
class DB {
    /**
     * Given a SQL query, this function will return a MySQL result set containing
     * the results.
     * 
     * @param $query
     */
    public static function getDataFromDataSource($query) {
        mysql_connect("127.0.0.1", "root", "") or die("Connection Failure to Database");
        mysql_select_db("criademo") or die("Database criademo not found.");
        $result = mysql_query($query);
        return $result;
    }
    
    /**
     * Converts a MySQL result set to a 2D array:
     * [[1,"Rody"],[2,"Sander"],[3,"Karel"]]
     * @param $result
     */
    public static function to2DArray($result)
    {
        $arr = array();
        while ($row = mysql_fetch_array($result)) {
            array_push($arr, $row);
        }
        return $arr;
    }
}
?>