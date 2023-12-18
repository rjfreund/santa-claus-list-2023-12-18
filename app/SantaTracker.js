"use client"

import React from 'react';
import { useTable } from 'react-table';
import moment from 'moment';

const SantaTracker = () => {
    // Sample data
    const data = React.useMemo(
        () =>
            [
                {
                    "Person": "Williams, John, C.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Toy Car"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Toy Car",
                        "Doll",
                        "Puzzle",
                        "Book"
                    ],
                    "Watching Out": [
                        "2023-07-09T00:30:31",
                        "2023-07-09T00:42:31",
                        12
                    ],
                    "Crying": [
                        "2023-02-17T15:24:45",
                        "2023-02-17T16:32:45",
                        68
                    ],
                    "Pouting": [
                        "2023-04-23T14:47:35",
                        "2023-04-23T16:33:35",
                        106
                    ],
                    "Sleeping/Awake": [
                        "2023-04-18T12:20:32",
                        "2023-04-18T13:44:32",
                        84
                    ]
                },
                {
                    "Person": "Williams, Michael, E.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Video Game",
                        "Toy Car",
                        "Doll",
                        "Puzzle",
                        "Book"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Bicycle",
                        "Doll"
                    ],
                    "Watching Out": [
                        "2023-07-03T22:29:16",
                        "2023-07-03T23:40:16",
                        71
                    ],
                    "Crying": [
                        "2023-12-19T14:19:08",
                        "2023-12-19T15:23:08",
                        64
                    ],
                    "Pouting": [
                        "2023-01-30T14:46:35",
                        "2023-01-30T16:38:35",
                        112
                    ],
                    "Sleeping/Awake": [
                        "2023-03-07T14:24:30",
                        "2023-03-07T14:35:30",
                        11
                    ]
                },
                {
                    "Person": "Jones, Michael, A.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Doll",
                        "Puzzle",
                        "Toy Car",
                        "Video Game",
                        "Bicycle",
                        "Book"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Toy Car",
                        "Puzzle",
                        "Book"
                    ],
                    "Watching Out": [
                        "2023-07-17T23:43:31",
                        "2023-07-18T00:57:31",
                        74
                    ],
                    "Crying": [
                        "2023-06-27T00:52:52",
                        "2023-06-27T02:43:52",
                        111
                    ],
                    "Pouting": [
                        "2023-08-23T00:17:27",
                        "2023-08-23T00:50:27",
                        33
                    ],
                    "Sleeping/Awake": [
                        "2023-01-06T13:25:14",
                        "2023-01-06T13:54:14",
                        29
                    ]
                },
                {
                    "Person": "Jones, Sarah, C.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Bicycle",
                        "Puzzle",
                        "Video Game"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Toy Car",
                        "Book",
                        "Bicycle",
                        "Doll",
                        "Video Game",
                        "Puzzle"
                    ],
                    "Watching Out": [
                        "2023-08-20T14:54:06",
                        "2023-08-20T15:52:06",
                        58
                    ],
                    "Crying": [
                        "2023-09-22T04:48:36",
                        "2023-09-22T05:06:36",
                        18
                    ],
                    "Pouting": [
                        "2023-01-30T06:28:49",
                        "2023-01-30T07:05:49",
                        37
                    ],
                    "Sleeping/Awake": [
                        "2023-01-12T20:34:39",
                        "2023-01-12T22:02:39",
                        88
                    ]
                },
                {
                    "Person": "Smith, Sarah, A.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Video Game",
                        "Bicycle"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Toy Car"
                    ],
                    "Watching Out": [
                        "2023-02-04T18:55:17",
                        "2023-02-04T20:06:17",
                        71
                    ],
                    "Crying": [
                        "2023-01-05T00:02:52",
                        "2023-01-05T01:48:52",
                        106
                    ],
                    "Pouting": [
                        "2023-08-17T06:53:20",
                        "2023-08-17T08:00:20",
                        67
                    ],
                    "Sleeping/Awake": [
                        "2023-08-04T16:12:10",
                        "2023-08-04T16:16:10",
                        4
                    ]
                },
                {
                    "Person": "Smith, Sarah, C.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Bicycle",
                        "Video Game",
                        "Toy Car",
                        "Puzzle",
                        "Book",
                        "Doll"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Book",
                        "Bicycle",
                        "Puzzle",
                        "Video Game",
                        "Doll",
                        "Toy Car"
                    ],
                    "Watching Out": [
                        "2023-03-16T20:15:48",
                        "2023-03-16T21:39:48",
                        84
                    ],
                    "Crying": [
                        "2023-03-08T21:31:51",
                        "2023-03-08T22:26:51",
                        55
                    ],
                    "Pouting": [
                        "2023-08-26T09:34:03",
                        "2023-08-26T11:26:03",
                        112
                    ],
                    "Sleeping/Awake": [
                        "2023-09-15T06:34:42",
                        "2023-09-15T06:49:42",
                        15
                    ]
                },
                {
                    "Person": "Johnson, Jane, A.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Toy Car"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Toy Car",
                        "Doll"
                    ],
                    "Watching Out": [
                        "2023-08-26T14:05:25",
                        "2023-08-26T15:29:25",
                        84
                    ],
                    "Crying": [
                        "2023-03-26T10:34:01",
                        "2023-03-26T12:29:01",
                        115
                    ],
                    "Pouting": [
                        "2023-12-08T20:06:34",
                        "2023-12-08T20:53:34",
                        47
                    ],
                    "Sleeping/Awake": [
                        "2023-01-07T08:24:09",
                        "2023-01-07T08:58:09",
                        34
                    ]
                },
                {
                    "Person": "Smith, Emily, D.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Video Game"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Puzzle"
                    ],
                    "Watching Out": [
                        "2023-04-10T16:58:18",
                        "2023-04-10T18:31:18",
                        93
                    ],
                    "Crying": [
                        "2023-10-03T12:03:09",
                        "2023-10-03T13:54:09",
                        111
                    ],
                    "Pouting": [
                        "2023-08-13T12:25:47",
                        "2023-08-13T13:59:47",
                        94
                    ],
                    "Sleeping/Awake": [
                        "2023-07-18T07:38:16",
                        "2023-07-18T08:06:16",
                        28
                    ]
                },
                {
                    "Person": "Williams, Emily, E.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Toy Car",
                        "Puzzle",
                        "Video Game",
                        "Book",
                        "Doll"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Doll",
                        "Puzzle",
                        "Book",
                        "Toy Car"
                    ],
                    "Watching Out": [
                        "2023-01-19T03:29:10",
                        "2023-01-19T04:57:10",
                        88
                    ],
                    "Crying": [
                        "2023-09-18T10:33:16",
                        "2023-09-18T12:33:16",
                        120
                    ],
                    "Pouting": [
                        "2023-12-14T02:46:28",
                        "2023-12-14T04:40:28",
                        114
                    ],
                    "Sleeping/Awake": [
                        "2023-05-12T01:11:43",
                        "2023-05-12T02:53:43",
                        102
                    ]
                },
                {
                    "Person": "Smith, Jane, B.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Toy Car"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Toy Car",
                        "Book",
                        "Video Game",
                        "Puzzle",
                        "Bicycle"
                    ],
                    "Watching Out": [
                        "2023-09-05T01:10:27",
                        "2023-09-05T03:08:27",
                        118
                    ],
                    "Crying": [
                        "2023-01-20T00:36:18",
                        "2023-01-20T00:54:18",
                        18
                    ],
                    "Pouting": [
                        "2023-07-03T11:12:07",
                        "2023-07-03T11:17:07",
                        5
                    ],
                    "Sleeping/Awake": [
                        "2023-03-06T14:13:38",
                        "2023-03-06T14:38:38",
                        25
                    ]
                },
                {
                    "Person": "Smith, Jane, D.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Bicycle",
                        "Puzzle",
                        "Toy Car",
                        "Book"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Toy Car",
                        "Book"
                    ],
                    "Watching Out": [
                        "2023-08-29T04:09:33",
                        "2023-08-29T04:44:33",
                        35
                    ],
                    "Crying": [
                        "2023-05-24T06:30:31",
                        "2023-05-24T08:04:31",
                        94
                    ],
                    "Pouting": [
                        "2023-12-20T00:32:03",
                        "2023-12-20T01:03:03",
                        31
                    ],
                    "Sleeping/Awake": [
                        "2023-08-10T02:45:57",
                        "2023-08-10T03:16:57",
                        31
                    ]
                },
                {
                    "Person": "Jones, Michael, A.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Toy Car",
                        "Doll",
                        "Bicycle",
                        "Puzzle",
                        "Video Game",
                        "Book"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Bicycle",
                        "Doll",
                        "Toy Car",
                        "Book",
                        "Video Game"
                    ],
                    "Watching Out": [
                        "2023-03-31T11:02:13",
                        "2023-03-31T12:08:13",
                        66
                    ],
                    "Crying": [
                        "2023-07-27T21:43:17",
                        "2023-07-27T21:45:17",
                        2
                    ],
                    "Pouting": [
                        "2023-08-25T19:08:20",
                        "2023-08-25T20:54:20",
                        106
                    ],
                    "Sleeping/Awake": [
                        "2023-02-04T21:27:30",
                        "2023-02-04T23:07:30",
                        100
                    ]
                },
                {
                    "Person": "Jones, John, A.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Bicycle",
                        "Puzzle",
                        "Video Game",
                        "Doll",
                        "Toy Car"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Puzzle",
                        "Book",
                        "Bicycle",
                        "Toy Car",
                        "Doll",
                        "Video Game"
                    ],
                    "Watching Out": [
                        "2023-06-17T20:41:33",
                        "2023-06-17T21:51:33",
                        70
                    ],
                    "Crying": [
                        "2023-01-20T15:16:21",
                        "2023-01-20T16:49:21",
                        93
                    ],
                    "Pouting": [
                        "2023-08-21T18:56:30",
                        "2023-08-21T19:43:30",
                        47
                    ],
                    "Sleeping/Awake": [
                        "2023-03-26T13:23:37",
                        "2023-03-26T14:11:37",
                        48
                    ]
                },
                {
                    "Person": "Jones, Michael, D.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Video Game",
                        "Book",
                        "Toy Car",
                        "Bicycle"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Doll"
                    ],
                    "Watching Out": [
                        "2023-10-29T00:06:23",
                        "2023-10-29T01:47:23",
                        101
                    ],
                    "Crying": [
                        "2023-03-25T13:52:29",
                        "2023-03-25T14:46:29",
                        54
                    ],
                    "Pouting": [
                        "2023-10-03T13:17:45",
                        "2023-10-03T13:33:45",
                        16
                    ],
                    "Sleeping/Awake": [
                        "2023-11-24T23:04:56",
                        "2023-11-25T00:22:56",
                        78
                    ]
                },
                {
                    "Person": "Williams, John, E.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Book"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Toy Car",
                        "Doll",
                        "Video Game",
                        "Bicycle",
                        "Book",
                        "Puzzle"
                    ],
                    "Watching Out": [
                        "2023-06-21T11:55:30",
                        "2023-06-21T13:10:30",
                        75
                    ],
                    "Crying": [
                        "2023-06-19T16:02:49",
                        "2023-06-19T16:49:49",
                        47
                    ],
                    "Pouting": [
                        "2023-09-23T07:50:17",
                        "2023-09-23T08:54:17",
                        64
                    ],
                    "Sleeping/Awake": [
                        "2023-10-19T05:16:43",
                        "2023-10-19T05:24:43",
                        8
                    ]
                },
                {
                    "Person": "Jones, Jane, A.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Video Game",
                        "Bicycle",
                        "Toy Car"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Puzzle",
                        "Book",
                        "Toy Car",
                        "Bicycle"
                    ],
                    "Watching Out": [
                        "2023-11-26T08:48:23",
                        "2023-11-26T09:12:23",
                        24
                    ],
                    "Crying": [
                        "2023-12-15T00:20:15",
                        "2023-12-15T02:18:15",
                        118
                    ],
                    "Pouting": [
                        "2023-07-17T00:04:25",
                        "2023-07-17T00:14:25",
                        10
                    ],
                    "Sleeping/Awake": [
                        "2023-10-16T08:57:38",
                        "2023-10-16T09:28:38",
                        31
                    ]
                },
                {
                    "Person": "Brown, Sarah, C.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Bicycle",
                        "Doll",
                        "Book"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Doll"
                    ],
                    "Watching Out": [
                        "2023-01-19T04:43:42",
                        "2023-01-19T05:18:42",
                        35
                    ],
                    "Crying": [
                        "2023-11-05T05:14:56",
                        "2023-11-05T05:35:56",
                        21
                    ],
                    "Pouting": [
                        "2023-06-28T19:48:14",
                        "2023-06-28T21:15:14",
                        87
                    ],
                    "Sleeping/Awake": [
                        "2023-08-09T14:49:22",
                        "2023-08-09T15:01:22",
                        12
                    ]
                },
                {
                    "Person": "Brown, Michael, C.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Book",
                        "Bicycle",
                        "Puzzle",
                        "Toy Car",
                        "Doll"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Book",
                        "Toy Car"
                    ],
                    "Watching Out": [
                        "2023-06-08T17:23:03",
                        "2023-06-08T17:46:03",
                        23
                    ],
                    "Crying": [
                        "2023-04-18T11:20:13",
                        "2023-04-18T12:47:13",
                        87
                    ],
                    "Pouting": [
                        "2023-05-07T00:47:52",
                        "2023-05-07T02:18:52",
                        91
                    ],
                    "Sleeping/Awake": [
                        "2023-02-23T23:52:12",
                        "2023-02-24T01:11:12",
                        79
                    ]
                },
                {
                    "Person": "Smith, John, C.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Doll",
                        "Book",
                        "Bicycle",
                        "Video Game",
                        "Toy Car"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Video Game",
                        "Book",
                        "Bicycle",
                        "Toy Car"
                    ],
                    "Watching Out": [
                        "2023-09-01T19:55:24",
                        "2023-09-01T20:32:24",
                        37
                    ],
                    "Crying": [
                        "2023-05-15T04:24:06",
                        "2023-05-15T04:46:06",
                        22
                    ],
                    "Pouting": [
                        "2023-02-22T15:10:05",
                        "2023-02-22T15:27:05",
                        17
                    ],
                    "Sleeping/Awake": [
                        "2023-03-01T19:09:10",
                        "2023-03-01T20:20:10",
                        71
                    ]
                },
                {
                    "Person": "Williams, Michael, B.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Doll",
                        "Video Game",
                        "Bicycle",
                        "Toy Car",
                        "Book"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Toy Car",
                        "Bicycle",
                        "Book",
                        "Video Game",
                        "Doll",
                        "Puzzle"
                    ],
                    "Watching Out": [
                        "2023-06-16T22:16:42",
                        "2023-06-16T22:42:42",
                        26
                    ],
                    "Crying": [
                        "2023-10-16T07:54:57",
                        "2023-10-16T08:20:57",
                        26
                    ],
                    "Pouting": [
                        "2023-09-16T17:26:07",
                        "2023-09-16T18:40:07",
                        74
                    ],
                    "Sleeping/Awake": [
                        "2023-02-15T06:43:53",
                        "2023-02-15T07:06:53",
                        23
                    ]
                },
                {
                    "Person": "Johnson, Sarah, D.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Video Game"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Toy Car",
                        "Doll",
                        "Video Game",
                        "Puzzle",
                        "Book"
                    ],
                    "Watching Out": [
                        "2023-01-29T19:52:18",
                        "2023-01-29T21:05:18",
                        73
                    ],
                    "Crying": [
                        "2023-02-24T16:07:52",
                        "2023-02-24T17:02:52",
                        55
                    ],
                    "Pouting": [
                        "2023-10-29T14:12:30",
                        "2023-10-29T15:20:30",
                        68
                    ],
                    "Sleeping/Awake": [
                        "2023-01-12T01:57:33",
                        "2023-01-12T02:19:33",
                        22
                    ]
                },
                {
                    "Person": "Brown, Emily, A.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Book",
                        "Toy Car",
                        "Puzzle",
                        "Video Game",
                        "Doll"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Doll"
                    ],
                    "Watching Out": [
                        "2023-05-03T18:02:28",
                        "2023-05-03T19:05:28",
                        63
                    ],
                    "Crying": [
                        "2023-04-22T12:08:03",
                        "2023-04-22T12:25:03",
                        17
                    ],
                    "Pouting": [
                        "2023-09-29T21:39:33",
                        "2023-09-29T21:47:33",
                        8
                    ],
                    "Sleeping/Awake": [
                        "2023-01-19T07:05:49",
                        "2023-01-19T07:33:49",
                        28
                    ]
                },
                {
                    "Person": "Smith, Emily, B.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Puzzle",
                        "Bicycle",
                        "Video Game"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Book",
                        "Doll",
                        "Toy Car",
                        "Puzzle",
                        "Bicycle"
                    ],
                    "Watching Out": [
                        "2023-12-27T02:32:12",
                        "2023-12-27T04:07:12",
                        95
                    ],
                    "Crying": [
                        "2023-10-19T04:29:02",
                        "2023-10-19T06:26:02",
                        117
                    ],
                    "Pouting": [
                        "2023-09-11T20:59:35",
                        "2023-09-11T21:55:35",
                        56
                    ],
                    "Sleeping/Awake": [
                        "2023-02-11T06:07:21",
                        "2023-02-11T06:09:21",
                        2
                    ]
                },
                {
                    "Person": "Brown, Michael, B.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Video Game",
                        "Puzzle",
                        "Book",
                        "Toy Car",
                        "Doll",
                        "Bicycle"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Book",
                        "Puzzle",
                        "Doll",
                        "Toy Car",
                        "Video Game"
                    ],
                    "Watching Out": [
                        "2023-10-16T13:25:54",
                        "2023-10-16T14:23:54",
                        58
                    ],
                    "Crying": [
                        "2023-04-29T15:57:43",
                        "2023-04-29T16:27:43",
                        30
                    ],
                    "Pouting": [
                        "2023-12-25T06:12:27",
                        "2023-12-25T07:14:27",
                        62
                    ],
                    "Sleeping/Awake": [
                        "2023-06-05T16:22:31",
                        "2023-06-05T17:34:31",
                        72
                    ]
                },
                {
                    "Person": "Brown, Jane, D.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Bicycle",
                        "Doll",
                        "Puzzle"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Book",
                        "Toy Car",
                        "Puzzle"
                    ],
                    "Watching Out": [
                        "2023-02-28T16:23:31",
                        "2023-02-28T17:21:31",
                        58
                    ],
                    "Crying": [
                        "2023-05-13T10:38:27",
                        "2023-05-13T11:56:27",
                        78
                    ],
                    "Pouting": [
                        "2023-08-26T11:16:07",
                        "2023-08-26T11:44:07",
                        28
                    ],
                    "Sleeping/Awake": [
                        "2023-08-23T21:27:05",
                        "2023-08-23T22:26:05",
                        59
                    ]
                },
                {
                    "Person": "Williams, Jane, B.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Puzzle",
                        "Book",
                        "Bicycle",
                        "Toy Car"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Book"
                    ],
                    "Watching Out": [
                        "2023-03-10T04:07:10",
                        "2023-03-10T05:03:10",
                        56
                    ],
                    "Crying": [
                        "2023-10-25T12:35:25",
                        "2023-10-25T12:46:25",
                        11
                    ],
                    "Pouting": [
                        "2023-05-21T00:36:37",
                        "2023-05-21T02:04:37",
                        88
                    ],
                    "Sleeping/Awake": [
                        "2023-09-22T12:46:11",
                        "2023-09-22T14:44:11",
                        118
                    ]
                },
                {
                    "Person": "Johnson, Emily, E.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Book",
                        "Bicycle",
                        "Toy Car"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Video Game",
                        "Puzzle",
                        "Doll"
                    ],
                    "Watching Out": [
                        "2023-07-31T02:09:03",
                        "2023-07-31T03:43:03",
                        94
                    ],
                    "Crying": [
                        "2023-12-23T12:33:45",
                        "2023-12-23T14:24:45",
                        111
                    ],
                    "Pouting": [
                        "2023-05-19T11:00:05",
                        "2023-05-19T11:18:05",
                        18
                    ],
                    "Sleeping/Awake": [
                        "2023-10-27T16:33:58",
                        "2023-10-27T17:42:58",
                        69
                    ]
                },
                {
                    "Person": "Jones, Emily, E.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Doll",
                        "Video Game",
                        "Bicycle",
                        "Toy Car"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Puzzle",
                        "Bicycle"
                    ],
                    "Watching Out": [
                        "2023-12-13T02:34:08",
                        "2023-12-13T03:31:08",
                        57
                    ],
                    "Crying": [
                        "2023-07-05T00:58:24",
                        "2023-07-05T02:18:24",
                        80
                    ],
                    "Pouting": [
                        "2023-05-10T14:50:48",
                        "2023-05-10T16:24:48",
                        94
                    ],
                    "Sleeping/Awake": [
                        "2023-05-28T01:28:01",
                        "2023-05-28T01:38:01",
                        10
                    ]
                },
                {
                    "Person": "Brown, Sarah, D.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Puzzle",
                        "Doll",
                        "Book",
                        "Video Game",
                        "Bicycle"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Toy Car",
                        "Puzzle",
                        "Video Game"
                    ],
                    "Watching Out": [
                        "2023-10-20T14:02:12",
                        "2023-10-20T16:01:12",
                        119
                    ],
                    "Crying": [
                        "2023-02-22T22:00:19",
                        "2023-02-22T22:45:19",
                        45
                    ],
                    "Pouting": [
                        "2023-08-19T01:50:30",
                        "2023-08-19T03:25:30",
                        95
                    ],
                    "Sleeping/Awake": [
                        "2023-09-01T01:23:37",
                        "2023-09-01T03:21:37",
                        118
                    ]
                },
                {
                    "Person": "Jones, Emily, E.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Toy Car",
                        "Video Game",
                        "Puzzle",
                        "Bicycle",
                        "Book"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Video Game"
                    ],
                    "Watching Out": [
                        "2023-03-28T00:02:17",
                        "2023-03-28T00:22:17",
                        20
                    ],
                    "Crying": [
                        "2023-03-08T17:47:11",
                        "2023-03-08T19:15:11",
                        88
                    ],
                    "Pouting": [
                        "2023-03-31T12:19:26",
                        "2023-03-31T13:23:26",
                        64
                    ],
                    "Sleeping/Awake": [
                        "2023-03-21T11:30:24",
                        "2023-03-21T11:32:24",
                        2
                    ]
                },
                {
                    "Person": "Johnson, Emily, B.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Book",
                        "Puzzle",
                        "Bicycle",
                        "Doll",
                        "Toy Car"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Doll",
                        "Video Game",
                        "Book",
                        "Puzzle",
                        "Bicycle",
                        "Toy Car"
                    ],
                    "Watching Out": [
                        "2023-04-11T18:33:04",
                        "2023-04-11T19:22:04",
                        49
                    ],
                    "Crying": [
                        "2023-06-15T19:28:26",
                        "2023-06-15T20:56:26",
                        88
                    ],
                    "Pouting": [
                        "2023-02-19T23:21:15",
                        "2023-02-20T01:17:15",
                        116
                    ],
                    "Sleeping/Awake": [
                        "2023-11-30T18:05:46",
                        "2023-11-30T18:22:46",
                        17
                    ]
                },
                {
                    "Person": "Jones, Michael, B.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Puzzle",
                        "Bicycle",
                        "Doll",
                        "Book"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Book",
                        "Puzzle",
                        "Doll"
                    ],
                    "Watching Out": [
                        "2023-04-30T19:39:59",
                        "2023-04-30T21:34:59",
                        115
                    ],
                    "Crying": [
                        "2023-02-03T20:05:22",
                        "2023-02-03T20:14:22",
                        9
                    ],
                    "Pouting": [
                        "2023-09-04T22:28:17",
                        "2023-09-04T23:03:17",
                        35
                    ],
                    "Sleeping/Awake": [
                        "2023-12-13T23:56:22",
                        "2023-12-14T00:06:22",
                        10
                    ]
                },
                {
                    "Person": "Jones, John, A.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Bicycle",
                        "Video Game"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Book",
                        "Puzzle"
                    ],
                    "Watching Out": [
                        "2023-11-13T03:52:19",
                        "2023-11-13T04:52:19",
                        60
                    ],
                    "Crying": [
                        "2023-02-16T18:22:36",
                        "2023-02-16T18:45:36",
                        23
                    ],
                    "Pouting": [
                        "2023-11-16T12:49:21",
                        "2023-11-16T13:01:21",
                        12
                    ],
                    "Sleeping/Awake": [
                        "2023-08-10T04:40:50",
                        "2023-08-10T05:54:50",
                        74
                    ]
                },
                {
                    "Person": "Smith, Emily, A.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Doll",
                        "Toy Car",
                        "Video Game",
                        "Bicycle",
                        "Book",
                        "Puzzle"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Book"
                    ],
                    "Watching Out": [
                        "2023-02-14T21:30:56",
                        "2023-02-14T23:28:56",
                        118
                    ],
                    "Crying": [
                        "2023-06-23T02:37:49",
                        "2023-06-23T04:13:49",
                        96
                    ],
                    "Pouting": [
                        "2023-01-03T09:10:46",
                        "2023-01-03T09:54:46",
                        44
                    ],
                    "Sleeping/Awake": [
                        "2023-08-16T02:41:50",
                        "2023-08-16T04:16:50",
                        95
                    ]
                },
                {
                    "Person": "Williams, Jane, B.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Book",
                        "Puzzle",
                        "Video Game",
                        "Toy Car",
                        "Doll"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Doll",
                        "Toy Car",
                        "Bicycle"
                    ],
                    "Watching Out": [
                        "2023-05-02T18:42:59",
                        "2023-05-02T20:42:59",
                        120
                    ],
                    "Crying": [
                        "2023-04-25T08:44:16",
                        "2023-04-25T09:31:16",
                        47
                    ],
                    "Pouting": [
                        "2023-12-31T00:29:49",
                        "2023-12-31T02:21:49",
                        112
                    ],
                    "Sleeping/Awake": [
                        "2023-08-16T06:49:26",
                        "2023-08-16T08:10:26",
                        81
                    ]
                },
                {
                    "Person": "Brown, Emily, A.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Video Game",
                        "Toy Car",
                        "Book"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Puzzle"
                    ],
                    "Watching Out": [
                        "2023-06-25T02:20:10",
                        "2023-06-25T03:39:10",
                        79
                    ],
                    "Crying": [
                        "2023-11-26T21:18:10",
                        "2023-11-26T22:39:10",
                        81
                    ],
                    "Pouting": [
                        "2023-07-18T00:03:43",
                        "2023-07-18T01:29:43",
                        86
                    ],
                    "Sleeping/Awake": [
                        "2023-07-26T17:43:16",
                        "2023-07-26T18:57:16",
                        74
                    ]
                },
                {
                    "Person": "Smith, Michael, E.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Toy Car",
                        "Puzzle",
                        "Doll",
                        "Bicycle",
                        "Book",
                        "Video Game"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Toy Car",
                        "Book"
                    ],
                    "Watching Out": [
                        "2023-06-11T23:08:14",
                        "2023-06-11T23:30:14",
                        22
                    ],
                    "Crying": [
                        "2023-09-12T05:14:31",
                        "2023-09-12T07:08:31",
                        114
                    ],
                    "Pouting": [
                        "2023-08-13T01:03:46",
                        "2023-08-13T02:55:46",
                        112
                    ],
                    "Sleeping/Awake": [
                        "2023-01-08T21:56:34",
                        "2023-01-08T23:30:34",
                        94
                    ]
                },
                {
                    "Person": "Brown, Jane, E.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Toy Car"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Doll",
                        "Toy Car",
                        "Book",
                        "Video Game",
                        "Bicycle",
                        "Puzzle"
                    ],
                    "Watching Out": [
                        "2023-12-11T03:35:17",
                        "2023-12-11T04:53:17",
                        78
                    ],
                    "Crying": [
                        "2023-07-06T03:54:51",
                        "2023-07-06T04:37:51",
                        43
                    ],
                    "Pouting": [
                        "2023-11-18T04:19:42",
                        "2023-11-18T05:45:42",
                        86
                    ],
                    "Sleeping/Awake": [
                        "2023-08-31T23:23:48",
                        "2023-09-01T01:08:48",
                        105
                    ]
                },
                {
                    "Person": "Williams, Jane, C.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Doll",
                        "Bicycle"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Puzzle",
                        "Doll",
                        "Bicycle",
                        "Book",
                        "Toy Car",
                        "Video Game"
                    ],
                    "Watching Out": [
                        "2023-11-29T22:20:54",
                        "2023-11-29T23:55:54",
                        95
                    ],
                    "Crying": [
                        "2023-08-25T11:27:26",
                        "2023-08-25T12:30:26",
                        63
                    ],
                    "Pouting": [
                        "2023-01-31T04:32:35",
                        "2023-01-31T05:06:35",
                        34
                    ],
                    "Sleeping/Awake": [
                        "2023-05-17T18:32:09",
                        "2023-05-17T20:07:09",
                        95
                    ]
                },
                {
                    "Person": "Brown, Emily, A.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Book",
                        "Puzzle",
                        "Bicycle",
                        "Doll",
                        "Toy Car",
                        "Video Game"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Puzzle"
                    ],
                    "Watching Out": [
                        "2023-03-12T14:12:57",
                        "2023-03-12T14:32:57",
                        20
                    ],
                    "Crying": [
                        "2023-12-24T19:46:28",
                        "2023-12-24T21:07:28",
                        81
                    ],
                    "Pouting": [
                        "2023-10-31T10:12:36",
                        "2023-10-31T10:17:36",
                        5
                    ],
                    "Sleeping/Awake": [
                        "2023-10-18T06:24:58",
                        "2023-10-18T07:40:58",
                        76
                    ]
                },
                {
                    "Person": "Jones, Sarah, D.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Bicycle",
                        "Doll",
                        "Video Game",
                        "Toy Car",
                        "Book"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Video Game",
                        "Doll",
                        "Puzzle",
                        "Book",
                        "Toy Car",
                        "Bicycle"
                    ],
                    "Watching Out": [
                        "2023-09-18T19:08:32",
                        "2023-09-18T21:07:32",
                        119
                    ],
                    "Crying": [
                        "2023-06-26T12:40:46",
                        "2023-06-26T12:54:46",
                        14
                    ],
                    "Pouting": [
                        "2023-09-16T06:52:24",
                        "2023-09-16T07:31:24",
                        39
                    ],
                    "Sleeping/Awake": [
                        "2023-07-02T08:41:39",
                        "2023-07-02T10:18:39",
                        97
                    ]
                },
                {
                    "Person": "Williams, John, A.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Bicycle",
                        "Book",
                        "Puzzle",
                        "Toy Car"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Bicycle",
                        "Video Game",
                        "Toy Car",
                        "Book",
                        "Doll",
                        "Puzzle"
                    ],
                    "Watching Out": [
                        "2023-01-17T07:20:31",
                        "2023-01-17T09:08:31",
                        108
                    ],
                    "Crying": [
                        "2023-12-22T18:55:59",
                        "2023-12-22T20:20:59",
                        85
                    ],
                    "Pouting": [
                        "2023-08-25T14:00:52",
                        "2023-08-25T14:19:52",
                        19
                    ],
                    "Sleeping/Awake": [
                        "2023-05-01T10:10:41",
                        "2023-05-01T11:07:41",
                        57
                    ]
                },
                {
                    "Person": "Johnson, John, C.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Puzzle",
                        "Toy Car"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Doll"
                    ],
                    "Watching Out": [
                        "2023-01-06T17:31:47",
                        "2023-01-06T18:01:47",
                        30
                    ],
                    "Crying": [
                        "2023-12-30T05:58:48",
                        "2023-12-30T06:24:48",
                        26
                    ],
                    "Pouting": [
                        "2023-07-23T13:11:02",
                        "2023-07-23T14:29:02",
                        78
                    ],
                    "Sleeping/Awake": [
                        "2023-04-15T07:46:13",
                        "2023-04-15T09:09:13",
                        83
                    ]
                },
                {
                    "Person": "Smith, Emily, B.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Bicycle"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Bicycle",
                        "Puzzle",
                        "Doll",
                        "Toy Car"
                    ],
                    "Watching Out": [
                        "2023-08-25T17:25:27",
                        "2023-08-25T18:39:27",
                        74
                    ],
                    "Crying": [
                        "2023-06-28T02:16:06",
                        "2023-06-28T03:53:06",
                        97
                    ],
                    "Pouting": [
                        "2023-05-19T12:00:15",
                        "2023-05-19T12:51:15",
                        51
                    ],
                    "Sleeping/Awake": [
                        "2023-02-08T12:33:45",
                        "2023-02-08T14:30:45",
                        117
                    ]
                },
                {
                    "Person": "Brown, Sarah, B.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Bicycle",
                        "Puzzle",
                        "Video Game",
                        "Doll",
                        "Toy Car",
                        "Book"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Video Game",
                        "Bicycle",
                        "Toy Car",
                        "Puzzle",
                        "Book"
                    ],
                    "Watching Out": [
                        "2023-12-20T05:37:45",
                        "2023-12-20T06:22:45",
                        45
                    ],
                    "Crying": [
                        "2023-06-08T19:30:19",
                        "2023-06-08T21:07:19",
                        97
                    ],
                    "Pouting": [
                        "2023-09-11T19:11:18",
                        "2023-09-11T19:23:18",
                        12
                    ],
                    "Sleeping/Awake": [
                        "2023-11-21T20:27:09",
                        "2023-11-21T21:19:09",
                        52
                    ]
                },
                {
                    "Person": "Johnson, Michael, B.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Puzzle",
                        "Doll",
                        "Toy Car",
                        "Bicycle",
                        "Book"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Book"
                    ],
                    "Watching Out": [
                        "2023-09-13T12:10:49",
                        "2023-09-13T13:41:49",
                        91
                    ],
                    "Crying": [
                        "2023-04-17T18:16:54",
                        "2023-04-17T20:10:54",
                        114
                    ],
                    "Pouting": [
                        "2023-07-01T04:39:35",
                        "2023-07-01T06:35:35",
                        116
                    ],
                    "Sleeping/Awake": [
                        "2023-08-25T02:12:25",
                        "2023-08-25T03:58:25",
                        106
                    ]
                },
                {
                    "Person": "Smith, Jane, E.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Puzzle",
                        "Doll",
                        "Book",
                        "Bicycle"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Book",
                        "Bicycle",
                        "Video Game",
                        "Doll",
                        "Toy Car"
                    ],
                    "Watching Out": [
                        "2023-11-15T23:26:03",
                        "2023-11-16T00:08:03",
                        42
                    ],
                    "Crying": [
                        "2023-12-22T11:07:33",
                        "2023-12-22T11:40:33",
                        33
                    ],
                    "Pouting": [
                        "2023-08-27T10:50:03",
                        "2023-08-27T10:57:03",
                        7
                    ],
                    "Sleeping/Awake": [
                        "2023-11-16T19:13:24",
                        "2023-11-16T19:44:24",
                        31
                    ]
                },
                {
                    "Person": "Johnson, Sarah, D.",
                    "Naughty/Nice": "Nice",
                    "List of Gifts Requested": [
                        "Bicycle"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Toy Car",
                        "Video Game",
                        "Doll",
                        "Bicycle",
                        "Book"
                    ],
                    "Watching Out": [
                        "2023-10-01T12:48:25",
                        "2023-10-01T14:22:25",
                        94
                    ],
                    "Crying": [
                        "2023-08-10T22:13:49",
                        "2023-08-10T23:47:49",
                        94
                    ],
                    "Pouting": [
                        "2023-08-28T11:16:15",
                        "2023-08-28T11:27:15",
                        11
                    ],
                    "Sleeping/Awake": [
                        "2023-09-25T12:02:12",
                        "2023-09-25T13:13:12",
                        71
                    ]
                },
                {
                    "Person": "Williams, Jane, A.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Video Game",
                        "Doll",
                        "Bicycle",
                        "Toy Car",
                        "Puzzle"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Bicycle",
                        "Toy Car",
                        "Doll",
                        "Puzzle",
                        "Video Game",
                        "Book"
                    ],
                    "Watching Out": [
                        "2023-09-24T18:30:36",
                        "2023-09-24T19:31:36",
                        61
                    ],
                    "Crying": [
                        "2023-08-06T12:20:52",
                        "2023-08-06T13:33:52",
                        73
                    ],
                    "Pouting": [
                        "2023-01-25T00:06:14",
                        "2023-01-25T00:38:14",
                        32
                    ],
                    "Sleeping/Awake": [
                        "2023-07-16T03:15:35",
                        "2023-07-16T03:45:35",
                        30
                    ]
                },
                {
                    "Person": "Brown, Emily, A.",
                    "Naughty/Nice": "Naughty",
                    "List of Gifts Requested": [
                        "Video Game",
                        "Book",
                        "Puzzle",
                        "Doll",
                        "Toy Car"
                    ],
                    "List of Gifts To Be Delivered": [
                        "Bicycle",
                        "Video Game"
                    ],
                    "Watching Out": [
                        "2023-12-11T13:11:48",
                        "2023-12-11T14:39:48",
                        88
                    ],
                    "Crying": [
                        "2023-01-23T07:53:47",
                        "2023-01-23T08:27:47",
                        34
                    ],
                    "Pouting": [
                        "2023-09-25T07:47:22",
                        "2023-09-25T09:17:22",
                        90
                    ],
                    "Sleeping/Awake": [
                        "2023-11-10T02:49:43",
                        "2023-11-10T03:57:43",
                        68
                    ]
                }
            ],
        []
    );

    // Define columns
    const columns = React.useMemo(
        () => [
            {
                Header: 'Person',
                accessor: 'Person', // accessor is the "key" in the data
            },
            {
                Header: 'Naughty/Nice',
                accessor: 'Naughty/Nice',
            },
            {
                Header: 'List of Gifts Requested',
                accessor: d => d['List of Gifts Requested'].join(', '),
            },
            {
                Header: 'List of Gifts To Be Delivered',
                accessor: d => d['List of Gifts To Be Delivered'].join(', '),
            },
            {
                Header: 'Watching Out (Minutes)',
                accessor: d => calculateDuration(d['Watching Out']),
            },
            {
                Header: 'Crying (Minutes)',
                accessor: d => calculateDuration(d['Crying']),
            },
            {
                Header: 'Pouting (Minutes)',
                accessor: d => calculateDuration(d['Pouting']),
            },
            {
                Header: 'Sleeping/Awake (Minutes)',
                accessor: d => calculateDuration(d['Sleeping/Awake']),
            },
        ],
        []
    );

    function calculateDuration(dataArray) {
        if (!Array.isArray(dataArray) || dataArray.length < 2) {
            console.error("Invalid data format. Expected an array with at least two elements.");
            return null;
        }

        const startDate = new Date(dataArray[0]);
        const endDate = new Date(dataArray[1]);

        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            console.error("Invalid date format in array.");
            return null;
        }

        const durationInMilliseconds = endDate.getTime() - startDate.getTime();
        const durationInMinutes = Math.floor(durationInMilliseconds / 60000);

        return durationInMinutes;
    }

    // const calculateDuration = ([start, end]) => {
    //     const duration = moment(end).diff(moment(start), 'minutes');
    //     return duration;
    // };

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup, i) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={i} >
                        {headerGroup.headers.map((column, i) => (
                            <th {...column.getHeaderProps()} key={i}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()} key={i} >
                            {row.cells.map((cell, i) => {
                                return <td {...cell.getCellProps()} key={i}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default SantaTracker;