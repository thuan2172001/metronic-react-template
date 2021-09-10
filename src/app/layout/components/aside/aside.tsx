import React, {useMemo} from "react";
import {Link} from "react-router-dom";
import objectPath from "object-path";
import {Brand} from "../brand/brand";
import {useHtmlClassService} from "../../_core/metronic-layout";
import {AsideMenu} from "./aside-menu/aside-menu";

export function Aside() {
  const uiService: any = useHtmlClassService();
  
  const layoutProps = useMemo(() => {
    return {
      disableScroll:
        objectPath.get(uiService.config, "aside.menu.dropdown") === "true" ||
        false,
      asideClassesFromConfig: uiService.getClasses("aside", true),
      disableAsideSelfDisplay:
        objectPath.get(uiService.config, "aside.self.display") === false,
      headerLogo: uiService.getLogo()
    };
  }, [uiService]);
  
  return (
    <>
      {/* begin::Aside */}
      <div id="kt_aside"
           className={`aside aside-left  ${layoutProps.asideClassesFromConfig} d-flex flex-column flex-row-auto`}>
        <Brand/>
        
        {/* begin::Aside Menu */}
        <div id="kt_aside_menu_wrapper" className="aside-menu-wrapper flex-column-fluid">
          {layoutProps.disableAsideSelfDisplay && (
            <>
              {/* begin::Header Logo */}
              <div className="header-logo">
                <Link to="">
                  <img alt="logo" src={layoutProps.headerLogo} />
                </Link>
              </div>
              {/* end::Header Logo */}
            </>
          )}
          <AsideMenu disableScroll={layoutProps.disableScroll}/>
        </div>
        {/* end::Aside Menu */}
      </div>
      {/* end::Aside */}
    </>
  );
}