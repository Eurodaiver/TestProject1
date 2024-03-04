using System;
using System.Collections.Generic;
using TestProject1.Models;

namespace TestProject1.Services.Interfaces
{
    public interface IDataService
    {
        public IEnumerable<Data> GetAll(int page, int pageSize, string filter);
        public int GetCount(string filter);
        public int InsertData(IEnumerable<IDictionary<int, string>> data);
    }
}
