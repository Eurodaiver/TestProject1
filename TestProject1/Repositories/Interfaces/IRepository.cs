using System.Collections.Generic;
using System.Linq;
using TestProject1.Models.Base;

namespace TestProject1.Repositories.Interfaces
{
    public interface IRepository<TDbModel> where TDbModel : BaseEntity
    {
        public IQueryable<TDbModel> GetAll();

        public int InsertData(IEnumerable<TDbModel> data);
    }
}
