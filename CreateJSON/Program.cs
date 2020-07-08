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
            var Country_Dairy = ds.Where(x => x.Kbn == 0);
            string json = JsonConvert.SerializeObject(Country_Dairy, Formatting.Indented);
            using (var sw = new StreamWriter(JsonFolder_Visualization_AngularAssets + "Country_Dairy.json", false))
            {
                sw.Write(json);
                sw.Close();
            }

            var Province_Dairy = ds.Where(x => x.Kbn == 1 && x.PublishDate.Month == 3);
            json = JsonConvert.SerializeObject(Province_Dairy, Formatting.Indented);
            using (var sw = new StreamWriter(JsonFolder_Visualization_AngularAssets + "Province_Dairy.json", false))
            {
                sw.Write(json);
                sw.Close();
            }
        }
    }
}
