class Config{
    public webPort = 3306;
    public webHost = 'localhost';
    public mySQLhost = 'localhost';
    public mySQLuser = "root";
    public mySQLpassword = "12345678";
    public mySQLdb = 'technotesdb'
}
const config = new Config();
export default config;