using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using System.Linq;
using TestProject1.Models;
using TestProject1.Repositories.Interfaces;
using TestProject1.Services.Interfaces;

namespace TestProject1.Services.Implementations
{
    public class DataService : IDataService
    {
        private readonly ILogger<DataService> _logger;

        private IRepository<Data> _repository { get; set; }

        public DataService(ILogger<DataService> logger, IRepository<Data> repository)
        {
            _logger = logger;
            _repository = repository;
        }

        public IEnumerable<Data> GetAll(int page, int pageSize, string? filter)
        {
            var fromId = pageSize * (page - 1) + 1;
            var res = _repository.GetAll().Where(x => x.Id >= fromId && x.Value.Contains(filter ?? "")).OrderBy(x => x.Id).Take(pageSize).ToList();
            _logger.LogInformation("Selected {0} rows.", res.Count);
            return res;
        }

        public int GetCount(string? filter = "")
        {
            return _repository.GetAll().Where(x => x.Value.Contains(filter ?? "")).Count();
        }

        public int InsertData(IEnumerable<IDictionary<int, string>> data)
        {
            var tmp = data.Select(x => new Data { Code = x.Keys.FirstOrDefault(), Value = x.Values.FirstOrDefault() }).OrderBy(x => x.Code).ToList();
            var res = _repository.InsertData(tmp);
            _logger.LogInformation("Inserted {0} rows.", res);
            return res;
        }

    }
}
