import React from 'react';

export function UncontrolledRating() {
  return (
    <div>
      <Star/><button>1</button>
      <Star/><button>2</button>
      <Star/><button>3</button>
      <Star/><button>4</button>
      <Star/><button>5</button>
    </div>
  )
}

function Star() {
  return <span>star </span>
}
