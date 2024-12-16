import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { dataset, valueFormatter } from "./dataset";
import { IoCart, IoRocketSharp, IoWallet } from "react-icons/io5";
import { FaWrench } from "react-icons/fa";

const Tableau10 = [
  "#4e79a7",
  "#f28e2c",
  "#e15759",
  "#76b7b2",
  "#59a14f",
  "#edc949",
  "#af7aa1",
  "#ff9da7",
  "#9c755f",
  "#bab0ab",
];

const chartsParams = {
  margin: { bottom: 20, left: 25, right: 5 },
  height: 300,
};

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 500,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

const LineChartPerson = () => {
  const [color, setColor] = React.useState("#4e79a7");

  const handleChange = (event, nextColor) => {
    setColor(nextColor);
  };
  return (
    <section className="my-10 ">
      <div className="grid grid-cols-7 gap-5">
        <div className="col-span-4 p-6  rounded-xl bg-[#2b2f49bd]">
          <div>
            <h3 className="text-[20px] text-white">Sales overview</h3>
            <p className="text-[#A0AEC0]">
              <span className="text-[#01B574]">(+5) more</span> in 2021
            </p>
          </div>
          <div>
            <Stack
              direction="column"
              spacing={2}
              alignItems="center"
              sx={{ width: "100%" }}
            >
              <LineChart
                {...chartsParams}
                series={[
                  {
                    data: [15, 23, 18, 19, 13],
                    label: "Example",
                    color,
                  },
                ]}
              />
              <ToggleButtonGroup
                // orientation="vertical"
                value={color}
                exclusive
                onChange={handleChange}
              >
                {Tableau10.map((value) => (
                  <ToggleButton key={value} value={value} sx={{ p: 1 }}>
                    <div
                      style={{
                        width: 15,
                        height: 15,
                        backgroundColor: value,
                        display: "inline-block",
                      }}
                    />
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Stack>
          </div>
        </div>
        <div className="col-span-3 p-4 bg-[#2b2f49bd]">
          <div>
            <BarChart
              dataset={dataset}
              xAxis={[{ scaleType: "band", dataKey: "month" }]}
              series={[
                { dataKey: "london", label: "London", valueFormatter },
                { dataKey: "paris", label: "Paris", valueFormatter },
                { dataKey: "newYork", label: "New York", valueFormatter },
                { dataKey: "seoul", label: "Seoul", valueFormatter },
              ]}
              {...chartSetting}
            />
          </div>
          <div>
          <h3 className="text-[20px] text-white">Active Users</h3>
            <p className="text-[#A0AEC0]">
              <span className="text-[#01B574]">(+23)</span> than last week
            </p>
          </div>
          <div className="grid grid-cols-4 gap-3 mt-7">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className='p-3 bg-[#0075FF] rounded-xl'>
                    <IoWallet className='text-white text-xl'/>
                </div>
                <span className="text-white text-[22px] font-bold">Users</span>
              </div>
              <div>
                <h4 className="text-white">32,984</h4>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className='p-3 bg-[#0075FF] rounded-xl'>
                    <IoRocketSharp className='text-white text-xl'/>
                </div>
                <span className="text-white text-[22px] font-bold">Clicks</span>
              </div>
              <div>
                <h4 className="text-white">2.42m</h4>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className='p-3 bg-[#0075FF] rounded-xl'>
                    <IoCart className='text-white text-xl'/>
                </div>
                <span className="text-white text-[22px] font-bold">Sales</span>
              </div>
              <div>
                <h4 className="text-white">2,400 $</h4>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className='p-3 bg-[#0075FF] rounded-xl'>
                    <FaWrench className='text-white text-xl'/>
                </div>
                <span className="text-white text-[22px] font-bold">Items</span>
              </div>
              <div>
                <h4 className="text-white">320</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LineChartPerson;
