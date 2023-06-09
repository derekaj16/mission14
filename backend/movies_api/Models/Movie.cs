﻿using System;
using System.Collections.Generic;

namespace movies_api.Models;

// The model for our movie object

public partial class Movie
{
    public int MovieId { get; set; }

    public string Category { get; set; }

    public string Title { get; set; }

    public int Year { get; set; }

    public string Director { get; set; }

    public string Rating { get; set; }

    public string Edited { get; set; }

    public string LentTo { get; set; }

    public string Notes { get; set; }
}
