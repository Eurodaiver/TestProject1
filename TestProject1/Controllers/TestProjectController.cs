using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using TestProject1.Models;
using TestProject1.Repositories.Interfaces;
using TestProject1.Services.Interfaces;

namespace TestProject1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestProjectController : ControllerBase
    {
        private readonly ILogger<TestProjectController> _logger;

        private IDataService _dataService { get; set; }
        private IRepository<Data> _repository { get; set; }

        public TestProjectController(ILogger<TestProjectController> logger, IDataService dataService, IRepository<Data> repository)
        {
            _logger = logger;
            _dataService = dataService;
            _repository = repository;
        }

        [HttpGet]
        public JsonResult Get(int page = 1, int pageSize = 5, string filter = "")
        {
            var data = _dataService.GetAll(page, pageSize, filter);
            int count = _dataService.GetCount(filter);
            return new JsonResult(new ViewModel { data = data, pages = count / pageSize + 1 });
        }

        [HttpPost]
        public JsonResult Post([FromBody] IEnumerable<IDictionary<int, string>> data)
        {
            var res = _dataService.InsertData(data);
            return new JsonResult($"Successfully inserted {res} items.");
        }
    }
}

