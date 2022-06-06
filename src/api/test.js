import http from "@/axios/http";

//获取DAG详情
//获取Topo图数据
export function topoLogicalgraph() {
    return http({
        url: "/api/Traffic/getTopology",
        method: "get",
    });
}
