using System;
using System.IO;
using System.Linq;
using Newtonsoft.Json;

namespace CreateJSON
{
    class Program
    {
        public const string JsonFolder_Visualization_AngularAssets = @"F:\VisLab\src\assets\json\";
        static void Main(string[] args)
        {
            var ds = COVID19.GetData(@"F:\VisLab\CreateJSON\csv\dataset.csv");
            Console.WriteLine("Import csv records count:" + ds.Count);
            //提取所有国家级的记录
            var Controy_Daily = ds.Where(x => x.Kbn == 0);
            string json = JsonConvert.SerializeObject(Controy_Daily, Formatting.Indented);
            using (var sw = new StreamWriter(JsonFolder_Visualization_AngularAssets + "Daily_COVID19.json", false))
            {
                sw.Write(json);
                sw.Close();
            }
        }
    }
}
