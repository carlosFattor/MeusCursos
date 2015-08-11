db.zips.aggregate([{$project: {first_char: {$substr: ["$city", 0, 1]}, zip: 1, pop: 1}}, {$match: {first_char: /^\d.*$/}}, {$group: {_id: "null", tot: {$sum: "$pop"}}}])
