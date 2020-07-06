using System;
using System.Collections.Generic;
using System.IO;

public class COVID19
{
    /// <summary>
    /// 公开时间
    /// </summary>
    /// <value></value>
    public DateTime PublishDate { get; set; }
    /// <summary>
    /// 类别
    /// </summary>
    /// <value></value>
    public int Kbn { get; set; }
    /// <summary>
    /// 省份
    /// </summary>
    /// <value></value>
    public string Province { get; set; }
    /// <summary>
    /// 城市
    /// </summary>
    /// <value></value>
    public string City { get; set; }
    /// <summary>
    /// 新增确诊病例
    /// </summary>
    /// <value></value>
    public int Confirmed_New { get; set; }
    /// <summary>
    /// 新增治愈出院数
    /// </summary>
    /// <value></value>
    public int Recoved_New { get; set; }
    /// <summary>
    /// 新增死亡数
    /// </summary>
    /// <value></value>
    public int Death_New { get; set; }
    /// <summary>
    /// 新增确诊无症状病例
    /// </summary>
    /// <value></value>
    public int Confirmed_asymptomatic_New { get; set; }
    /// <summary>
    /// 新增治愈无症状出院数
    /// </summary>
    /// <value></value>
    public int Recoved_asymptomatic_New { get; set; }
    /// <summary>
    /// 新增无症状死亡数
    /// </summary>
    /// <value></value>
    public int Death_asymptomatic_New { get; set; }
    /// <summary>
    /// 核减
    /// </summary>
    /// <value></value>
    public int SubAfterCheck { get; set; }
    /// <summary>
    /// 治愈核减
    /// </summary>
    /// <value></value>
    public int SubAfterCheck_Recoved { get; set; }
    /// <summary>
    /// 死亡核减
    /// </summary>
    /// <value></value>
    public int SubAfterCheck_Death { get; set; }
    /// <summary>
    /// 累积确诊病例
    /// </summary>
    /// <value></value>
    public int Confirmed_Total { get; set; }
    /// <summary>
    /// 累积治愈出院数
    /// </summary>
    /// <value></value>
    public int Recoved_Total { get; set; }
    /// <summary>
    /// 累积死亡数
    /// </summary>
    /// <value></value>
    public int Death_Total { get; set; }
    /// <summary>
    /// 累积确诊无症状病例
    /// </summary>
    /// <value></value>
    public int Confirmed_asymptomatic_Total { get; set; }
    /// <summary>
    /// 累积治愈无症状出院数
    /// </summary>
    /// <value></value>
    public int Recoved_asymptomatic_Total { get; set; }
    /// <summary>
    /// 累积无症状死亡数
    /// </summary>
    /// <value></value>
    public int Death_asymptomatic_Total { get; set; }


    public static List<COVID19> GetData(string csvfilename)
    {
        var sr = new StreamReader(csvfilename);
        sr.ReadLine();
        var rtn = new List<COVID19>();
        while (!sr.EndOfStream)
        {
            var split = sr.ReadLine().Split(",");
            var r = new COVID19();
            var Month = split[0].Substring(0, 1);
            var Day = split[0].Substring(2).TrimEnd("日".ToCharArray());
            r.PublishDate = new DateTime(2020, int.Parse(Month), int.Parse(Day));
            switch (split[1])
            {
                case "国家级":
                    r.Kbn = 0;
                    break;
                case "省级":
                    r.Kbn = 1;
                    break;
                case "地区级":
                    r.Kbn = 2;
                    break;
                default:
                    r.Kbn = -1;
                    break;
            }
            r.Province = split[2];
            r.City = split[3];
            r.Confirmed_New = string.IsNullOrEmpty(split[4])?0:int.Parse(split[4]);
            r.Recoved_New = string.IsNullOrEmpty(split[5])?0:int.Parse(split[5]);
            r.Death_New = string.IsNullOrEmpty(split[6])?0:int.Parse(split[6]);
            r.Confirmed_asymptomatic_New = string.IsNullOrEmpty(split[7])?0:int.Parse(split[7]);
            r.Recoved_asymptomatic_New = string.IsNullOrEmpty(split[8])?0:int.Parse(split[8]);
            r.Death_asymptomatic_New = string.IsNullOrEmpty(split[9])?0:int.Parse(split[9]);
            r.SubAfterCheck = string.IsNullOrEmpty(split[10])?0:int.Parse(split[10]);
            r.SubAfterCheck_Recoved = string.IsNullOrEmpty(split[11])?0:int.Parse(split[11]);
            r.SubAfterCheck_Death = string.IsNullOrEmpty(split[12])?0:int.Parse(split[12]);
            r.Confirmed_Total = string.IsNullOrEmpty(split[13])?0:int.Parse(split[13]);
            r.Recoved_Total = string.IsNullOrEmpty(split[14])?0:int.Parse(split[14]);
            r.Death_Total = string.IsNullOrEmpty(split[15])?0:int.Parse(split[15]);
            r.Confirmed_asymptomatic_Total = string.IsNullOrEmpty(split[16])?0:int.Parse(split[16]);
            r.Recoved_asymptomatic_Total = string.IsNullOrEmpty(split[17])?0:int.Parse(split[17]);
            r.Death_asymptomatic_Total = string.IsNullOrEmpty(split[18])?0:int.Parse(split[18]);
            rtn.Add(r);
        }
        return rtn;
    }


}