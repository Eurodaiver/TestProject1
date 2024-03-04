using System;
using System.Collections.Generic;

namespace TestProject1.Models
{
    public class ViewModel
    {
        public IEnumerable<Data> data { get; set; }
        public int pages { get; set; }
    }
}
