using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using TestProject1.Database;
using TestProject1.Models.Base;
using TestProject1.Repositories.Interfaces;

namespace TestProject1.Repositories.Implementations
{
    public class Repository<TDbModel> : IRepository<TDbModel> where TDbModel : BaseEntity
    {
        private ApplicationContext _сontext { get; set; }
        public Repository(ApplicationContext context)
        {
            _сontext = context;
        }

        public int InsertData(IEnumerable<TDbModel> data)
        {
            _сontext.Database.ExecuteSqlRaw("DELETE FROM Data");
            _сontext.Database.ExecuteSqlRaw("UPDATE SQLITE_SEQUENCE SET seq = 0 WHERE name = 'Data'");
            _сontext.Set<TDbModel>().AddRange(data);
            var res = _сontext.SaveChanges();
            return res;
        }

        public IQueryable<TDbModel> GetAll()
        {
            return _сontext.Set<TDbModel>();
        }

        public TDbModel Update(TDbModel model)
        {
            var toUpdate = _сontext.Set<TDbModel>().FirstOrDefault(m => m.Id == model.Id);
            if (toUpdate != null)
            {
                toUpdate = model;
            }
            _сontext.Update(toUpdate);
            _сontext.SaveChanges();
            return toUpdate;
        }

        public TDbModel Get(int id)
        {
            return _сontext.Set<TDbModel>().FirstOrDefault(m => m.Id == id);
        }
    }
}
