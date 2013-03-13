<?php
/**
 * EmailAddress class serves as a single point for 
 * functions working on returning data concerning emailaddresses.
 */
class EmailAddress {
    /**
     * Returns whether an emailaddress already exists in the database.
     * 
     * @param $emailaddress
     */
    public static function exists($emailaddress) {
        $result = DB::getDataFromDataSource(
            "SELECT COUNT(*) AS emailaddressCount 
            from adresboek where emailaddress = '" 
            . $emailaddress . "'");
        return DB::to2DArray($result);
    }  
}
?>